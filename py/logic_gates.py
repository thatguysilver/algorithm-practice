#inspired by the book Code by Charles Petzold. I decided to make the five basic logic gates discussed
#in the book.

def and_gate(*args):
    for arg in range(1, len(args)):
        if args[arg] == 1:
            continue
        else:
            return 0
    return 1



def or_gate(*args):
    if sum(args) > 0:
        return 1
    else: 
        return 0
    


def nand_gate(*args):
    for arg in range(1, len(args)):
        if args[arg] == 1:
            continue
        else:
            return 1
    return 0



def nor_gate(*args):
    if sum(args) > 0:
        return 0
    else: 
        return 1

def xor_gate(*args):
    for arg in args[1:]:
        if args[arg] == args[0]:
            continue
        
        else:
            return 1
    return 0
print(and_gate(0, 0, 0)) #for testing
print(or_gate(0, 0, 0)) #for testing
print(nand_gate(1, 1, 1)) #for testing
print(nor_gate(0, 0, 0))
print(xor_gate(1, 1, 0))
