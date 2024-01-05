/*
* Angular Js application scripts
*/
angular.module("PubApp", ['ngSanitize'])
.controller('PubCntrl', ['$scope', '$sce', function ($scope) {
    // set up data scope by calling init at the webpage
    $scope.setupDataVals = function (data) {
        $scope.PublicationsData = data;

        //prepare series filter dropdown. 1) get unique list by object and then sort it in array.
        var seriesList = {};
        angular.forEach($scope.PublicationsData, function (p) {
            if (p.series != '') {
                //seriesList[p.series] = p.series;
                seriesList[p.series] = p.series;
            }
        });
        var arrayList = [];
        for (var oKey in seriesList) {
            arrayList.push(oKey);
        }
        $scope.seriesListData = arrayList.sort();
    }
    $scope.resetForm = function () {
        if (angular.isDefined($scope.pubID)) {
            delete $scope.pubID;
        }
        if (angular.isDefined($scope.topicID)) {
            delete $scope.topicID;
        }
        if (angular.isDefined($scope.langID)) {
            delete $scope.langID;
        }
        if (angular.isDefined($scope.seriesID)) {
            delete $scope.seriesID;
        }
    }
    $scope.getLanguage = function (id) {
        var p = $.grep($scope.PublicationsData, function (e) { return e.id == id; });
        //console.log(p);
        var data = '';
        if (p[0].lEn != '' || p[0].lAr != '' || p[0].lFr != '' || p[0].lCn != '' || p[0].lSp != '' || p[0].lRu != '') {
            data += '<strong>Languages: </strong>';
        }
        if (p[0].lEn != '') {
            data += p[0].lEn;
        }
        if (p[0].lAr != '') {
            data += ',' + p[0].lAr;
        }
        if (p[0].lFr != '') {
            data += ',' + p[0].lFr;
        }
        if (p[0].lCn != '') {
            data += ',' + p[0].lCn;
        }
        if (p[0].lSp != '') {
            data += ',' + p[0].lSp;
        }
        if (p[0].lRu != '') {
            data += ',' + p[0].lRu;
        }
        //return $sce.trustAsHtml(data);
        return data;
    }

    //$scope.getSpecificPublication = function (id) {
    //    return $.grep($scope.PublicationsData, function (e) { return e.id == id; });
    //}

}])