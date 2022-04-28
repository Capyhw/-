/**
 * @param {number} n
 * @return {number}
 */
 var arrangeCoins = function(n) {
    let l=1,r=n,mid
    while(l<=r){
        mid=Math.floor((l+r)/2)
        if(mid*(mid+1)/2<n){
            l=mid+1
        }else if(mid*(mid+1)/2>n){
            r=mid-1
        }else{
            return mid
        }
    }
    return r
};