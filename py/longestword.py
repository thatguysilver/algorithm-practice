#Gotta find the longest word in a string.
#Trying to do this with Vim and good Lord, I understand
#Why this is so popular, but damn is it tough to get into.

def longest(string):
    a = string.split()
    biggest_word = a[0]
    #print(biggest_word)
    
    for i in range(1, len(a)):
        if len(biggest_word) <len(a[i]):
            biggest_word = a[i]
            
    
    print(biggest_word) 
    
    #same problem as with the js version of this problem; It's returning
    #the final item in the string.


longest("This is a sentence with one jakf;djsakljfkdl;s word")
