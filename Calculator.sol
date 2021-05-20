// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Calculator {
    event Add(address indexed account, int256 nb1, int256 nb2, int256 res);
    event Sub(address indexed account, int256 nb1, int256 nb2, int256 res);
    event Mul(address indexed account, int256 nb1, int256 nb2, int256 res);
    event Div(address indexed account, int256 nb1, int256 nb2, int256 res);
    event Mod(address indexed account, int256 nb1, int256 nb2, int256 res);

    function add(int256 nb1, int256 nb2) public payable returns (int256) {
        emit Add(msg.sender, nb1, nb2, nb1 + nb2);
        return nb1 + nb2;
    }

    function sub(int256 nb1, int256 nb2) public payable returns (int256) {
        emit Sub(msg.sender, nb1, nb2, nb1 - nb2);
        return nb1 - nb2;
    }

    function mul(int256 nb1, int256 nb2) public payable returns (int256) {
        emit Mul(msg.sender, nb1, nb2, nb1 * nb2);
        return nb1 * nb2;
    }

    function div(int256 nb1, int256 nb2) public payable returns (int256) {
        emit Div(msg.sender, nb1, nb2, nb1 / nb2);
        return nb1 / nb2;
    }

    function mod(int256 nb1, int256 nb2) public payable returns (int256) {
        emit Mod(msg.sender, nb1, nb2, nb1 % nb2);
        return nb1 % nb2;
    }
}
