// SPDX-License-Identifier: MIT

pragma solidity 0.8.18;

contract appUserHandles {
    struct OwnerHandle {
        address owner;
        string userHandle;
    }

    OwnerHandle[] private handles;
    OwnerHandle handlelocal;

    function addHandle(string memory _handle) public returns (string memory) {
        if (checkAddress(msg.sender) || checkHandle(_handle)) {
            return "Handle or address already exists.";
        } else {
            handlelocal.owner = msg.sender;
            handlelocal.userHandle = _handle;
            handles.push(handlelocal);
            return "Done";
        }
    }

    function fetchHandle() public view returns (string memory) {
        bool addExists = checkAddress(msg.sender);
        address tempAdd;
        string memory foundHandle;
        if (addExists == true) {
            for (uint256 i = 0; i < handles.length; i++) {
                tempAdd = handles[i].owner;

                if (tempAdd == msg.sender) {
                    foundHandle = handles[i].userHandle;
                }
        }
        } else {
            foundHandle = "#DNE";
        }
        return foundHandle;
    }

    function fetchAddress(string memory _handle) public view returns (address) {
        bool handleExists = checkHandle(_handle);
        address foundAdd;
        string memory tempHandle;
        if (handleExists == true) {
            for (uint256 i = 0; i < handles.length; i++) {
                tempHandle = handles[i].userHandle;

                if (keccak256(abi.encodePacked(tempHandle)) == keccak256(abi.encodePacked(_handle))) {
                    foundAdd = handles[i].owner;
                }
        }
        } else {
            foundAdd;
        }
        return foundAdd;
    }

    function checkAddress(address _checkAddress) private view returns (bool) {
        bool addressFound = false;
        address tempAdd;

        for (uint256 i = 0; i < handles.length && !addressFound; i++) {
            tempAdd = handles[i].owner;
            if (tempAdd == _checkAddress) {
                addressFound = true;
            }
        }

        return addressFound;
    }

    function checkHandle(string memory _checkHandle)
        public
        view
        returns (bool)
    {
        bool handleFound = false;
        string memory tempHandle;

        for (uint256 i = 0; i < handles.length && !handleFound; i++) {
            tempHandle = handles[i].userHandle;
            if (
                keccak256(abi.encodePacked(tempHandle)) ==
                keccak256(abi.encodePacked(_checkHandle))
            ) {
                handleFound = true;
            }
        }

        return handleFound;
    }
}
