#Gotta make a palindrome tester. It must return true
#if it's palindromic. It must have lowercase/uppercase whatever.
import re

def is_palindrome(raw_word):

    word = re.sub(r'[!@#$%^&*()/\\]+', '', raw_word, )
    print(word)

    for i in range(0, len(word)):
        a = (word[i].lower() == word[-(i+1)].lower())

        if a == True:
            continue

        else:
            print("Not a palindrome")
            break
    if a == True:
        print("It is a palindrome.")


is_palindrome("abcgdsafdsf/\edcba")
is_palindrome("a!#bcd#ef@gFed%cba")

'''
Man, this is so much easier in py than in js.'''
