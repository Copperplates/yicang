pragma solidity ^0.6.0;
pragma contract_version 123;
// SPDX-License-Identifier: MIT
contract DigitalCollectible 
{
    // 定义数字藏品结构体
    struct Collectible 
    {
        uint256 id; // 藏品ID
        identity owner; // 当前所有者地址
        string metadata; // 元数据信息
        bool forSale; // 是否待售
        uint256 price; // 售价
    }

    // 映射藏品ID到藏品结构体
    mapping(uint256 => Collectible) public collectibles;
    uint256 public nextId = 1; // 下一个可用的藏品ID

    // 定义事件
    event CollectibleCreated(uint256 id, identity owner, string metadata);
    event CollectibleTransferred(uint256 id, identity from, identity to, uint256 price);
    event CollectibleListed(uint256 id, uint256 price);
    event CollectibleUnlisted(uint256 id);

    // 仅所有者修饰器
    modifier onlyOwner(uint256 id) 
    {
        require(collectibles[id].owner == msg.sender, "You are not the owner of this collectible");
        _;
    }

    // 创建数字藏品
    function createCollectible(string memory metadata) public returns (string memory)
    {
        collectibles[nextId] = Collectible(nextId, msg.sender, metadata, false, 0);
        emit CollectibleCreated(nextId, msg.sender, metadata);
        nextId++;
        return collectibles[nextId-1].metadata;
    }

    // 转让数字藏品
    function transferCollectible(uint256 id, identity to) public onlyOwner(id) 
    {
        collectibles[id].owner = to;
        emit CollectibleTransferred(id, msg.sender, to, collectibles[id].price);
    }

    // 上架数字藏品
    function listCollectible(uint256 id, uint256 price) public onlyOwner(id) 
    {
        collectibles[id].forSale = true;
        collectibles[id].price = price;
        emit CollectibleListed(id, price);
    }

    // 下架数字藏品
    function unlistCollectible(uint256 id) public onlyOwner(id) 
    {
        collectibles[id].forSale = false;
        emit CollectibleUnlisted(id);
    }

    // 购买数字藏品
    function buyCollectible(uint256 id) public payable 
    {
        require(collectibles[id].forSale, "Collectible is not for sale");
        require(msg.value >= collectibles[id].price, "Insufficient funds");
        
        identity payable seller = payable(collectibles[id].owner);
        collectibles[id].owner = msg.sender;
        collectibles[id].forSale = false;
        seller.transfer(msg.value);
        
        emit CollectibleTransferred(id, seller, msg.sender, collectibles[id].price);
    }
}