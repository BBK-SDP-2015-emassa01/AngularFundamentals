'use strict'

eventsApp.controller('EventController',
    function EventController($scope) {
        $scope.sortorder= 'name';

        $scope.snippet='<span style= "color:red">hi there</span>';
        $scope.myStyle={color:'red'};
        $scope.boolValue=true;
        $scope.myClass="blue";
        $scope.event={
         name: "Angular Boot Camp",
         date: "17/04/17",
         time: "13:56PM",
         location: {
            address: 'Google Headquarters',
            city:'Mountain View',
            province: 'CA'
         },
         imageUrl: '/img/angularjs-logo.png',
         sessions: [
         {
            name: "Directives Masterclass",
            creatorName:"Bob Smith",
            duration: 1,
            level: 'Introduction',
            abstract: "In this session you will learn the ins and out of trading.",
            upVoteCount:0
         },
         {
            name: "Scopes for Fun",
            creatorName:"Bob Smith",
            duration: 2,
            level: 'Intermediate',
            abstract: "In this session you will learn the ins and out of trading.",
            upVoteCount:0

         },
         {
            name: "Well-Behaved Controllers",
            creatorName:"Bob Smith",
            duration: 3,
            level: 'Advanced',
            abstract: "In this session you will learn the ins and out of trading.",
            upVoteCount:0

         }
         ]
        }

        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function(session) {
            session.upVoteCount--;
        };
    }
    );