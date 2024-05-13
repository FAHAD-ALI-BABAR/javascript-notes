import numpy as np
arr=np.array([1,2,3])
print("array:", arr)
arr=np.array([[1,2,3],[4,5,6]])
print("array with rank:",arr)
arr=np.array((1,2,3))
print("array created using passed tuple", arr)
arr=np.array([[-1,2,0,4],[4,0,6,0]])
print("initial array::",arr)
arr=np.array([[1,2,3],[4,5,6]])
print("array in rank 2::",arr)
arr=np.array((1,2,3))
print("array created using tuple::",arr)
arr=np.array([[-1,2,0,4],[4,5,6,7],[9,8,7]])
print("array is::",arr)
sliced_arr=arr[:2,::2]
print("array with first 2 rows::",sliced_arr)
index_arr=arr[1,1,2,3]



