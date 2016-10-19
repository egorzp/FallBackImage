let app = angular.module("ImgErrApp", ['ImgFallback']);
app.controller('imgErrCtrl', ($scope) => {
    $scope.image_err = 'err.jpg';
    $scope.images = [
        '',
        'https://static.pexels.com/photos/62640/pexels-photo-62640.jpeg',
        'https://static.pexels.com/photos/96938/pexels-photo-96938.jpeg',
        'https://static.pexels.com/photos/54632/cat-animal-eyes-grey-54632.jpeg',
        'https://static.pexels.com/photos/54632/cat-animal-ey-grey-54632.jpeg',
        'https://static.pexels.com/photos/54632/cat-anial-ey-grey-54632.jpeg',
        'https://static.pexels.com/photos/127028/pexels-photo-127028.jpeg',
        'https://static.pexels.com/photos/8923/pexels-photo.jpg',
        'https://static.pexels.com/photos/8923/pexels.jpg',
        'https://static.pexels.com/photos/33537/cat-animal-cat-portrait-mackerel.jpg',
        'https://static.pexels.com/potos/54632/cat-animal-ey-grey-54632.jpeg',
        'https://static.pexels.com/photos/54632/cat-animal-grey-54632.jpeg'
    ]

});
