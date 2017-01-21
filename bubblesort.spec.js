describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });


  it("sortarry",function(){
    var arr=[9,8,7,6,5,2,3];
    expect(bubbleSort(arr)).toEqual([2,3,5,6,7,8,9]);
  });
  
  it("sort",function(){
    var arr=[5,1,2,3]
    expect(bubbleSort(arr)).toEqual([1,2,3,5]);
  });

  });

