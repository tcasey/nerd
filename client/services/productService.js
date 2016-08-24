angular.module("nerd").service("productService", function($q, $http) {

      this.getProfile = function() {
        return $http({
          method: 'GET',
          url: '/profile'
        }).success(function(res) {
            return $http({
              method: 'GET',
              url: '/user/current'
            }).success(function(res) {
              console.log('getting user', res);
            });
          });
          // some sort of statement to compare the two and return the wanted data
        };

          this.getProducts = function() {
            return $http({
              method: 'GET',
              url: '/products'
            }).then(function(res) {
              // console.log(res.data, 'this should have the products for ng-options');
              return res.data;
            });
          };
          // Creating product through the input field
          this.postProduct = function(name, description, price) {
            return $http({
              data: {
                name: name,
                description: description,
                price: price
              },
              method: 'POST',
              url: '/products'
            }).success(function(res) {
              console.log('res from product post', res);
              return $http({
                method: 'PUT',
                url: '/profile',
                data: {
                  products: res._id
                }
              }).success(function(res) {
                console.log('res from profile put', res);
              });
            });
          };

          this.deleteProduct = function(productId) {
            return $http({
              method: 'DELETE',
              url: '/products/' + productId
            }).then(function(res) {
              console.log('deletedProduct', res);
            })
          }
        });
