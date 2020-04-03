pragma solidity ^0.6.0;

import "./ICRC721.sol";

/**
 * @title CRC-721 Non-Fungible Token Standard, optional metadata extension
 */
interface ICRC721Metadata is ICRC721 {
    function name() external view returns (string memory);
    function symbol() external view returns (string memory);
    function tokenURI(uint256 tokenId) external view returns (string memory);
}
