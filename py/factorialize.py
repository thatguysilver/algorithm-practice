#gotta make a factorial function now. Not using math(), &c.

def factorial(x):
    i = x
    while (i > 1): #iterates through i; stops at 1 instead of 0 b/c we want to
                #avoid multiplying by zero
        x=x*(i-1)
        i -= 1
    return x


print(factorial(10))
