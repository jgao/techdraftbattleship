'SEE README.md PLEASE';
'SEE README.md PLEASE';
'SEE README.md PLEASE';
'SEE README.md PLEASE';
'SEE README.md PLEASE';
'SEE README.md PLEASE';
'SEE README.md PLEASE';
'SEE README.md PLEASE';
'SEE README.md PLEASE';
'SEE README.md PLEASE';
'SEE README.md PLEASE';
'SEE README.md PLEASE';
'SEE README.md PLEASE';
'SEE README.md PLEASE';
'SEE README.md PLEASE';
'SEE README.md PLEASE';
'SEE README.md PLEASE';
'SEE README.md PLEASE';
'SEE README.md PLEASE';


'use strict';

var peoplecoChallengeNodejs = require('../lib/peopleco-challenge-nodejs.js'),
    _und = require("../node_modules/underscore/underscore-min");

var baseUrl = "student.people.co",
    yourUserHash = "8272ff6c5288",
    yourBaseUrl = "/api/challenge/battleship/"+yourUserHash+"/boards",
    topAxis = ["A","B","C","D","E","F","G","H","I","J"],
    leftAxis = ["1", "2","3","4","5","6","7","8","9","10"];


var numSunk = 0;

var testBoard;

peoplecoChallengeNodejs.retrieveBoards(baseUrl, yourBaseUrl, function( boards ){

    var boardsObjects = JSON.parse(boards);

    for(var obj in boardsObjects) {
        if(boardsObjects[obj].url == 'https://student.people.co/api/challenge/battleship/8272ff6c5288/boards/test_board_3'){
            testBoard = boardsObjects[obj];
            break;
        }
    }
    peoplecoChallengeNodejs.retrieveBoard(testBoard, baseUrl, yourBaseUrl, function( boardResult ) {


        for(var topAxi in topAxis)
        {
            if(numSunk == 5) break;

            for ( var leftAxi in leftAxis )
            {
                if(numSunk == 5) break;

                var coordinate = topAxis[topAxi] + leftAxis[leftAxi];
                console.log("Coord: " + coordinate);
                    peoplecoChallengeNodejs.makeMove(boardResult, coordinate, baseUrl, yourBaseUrl, function( moveResult ) {
                        

                        var mr = JSON.parse(moveResult);

                        if(!mr.is_hit) return;

                        //hit!
                        if(topAxi != 9){
                            peoplecoChallengeNodejs.makeMove(boardResult, topAxis[topAxi + 1] + leftAxis[leftAxi], baseUrl, yourBaseUrl, function( tres ) {
                                if(tres.is_hit) {
                                    for(var r = topAxi + 2; r < 10; r++){
                                        var endd = false;
                                        peoplecoChallengeNodejs.makeMove(boardResult, topAxis[r] + leftAxis[leftAxi], baseUrl, yourBaseUrl, function( ttres ) {
                                            if(ttres.sunk != null){
                                                endd = true;
                                            }
                                        }
                                    }
                                }
                            }
                        }

                    });

break;
            }
break;
        }

    });

});