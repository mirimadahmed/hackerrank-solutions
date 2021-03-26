def sockMerchant(n, ar):
    # hello
    # we need a conut
    count = 0
    # we need a dictionary
    colors = dict()
    # lets loop our array and find our pairs
    for color in ar:
        # if the color is already in our dictionary
        # it means we reached a pair so count it
        if (color in colors):
            count = count + 1
            del colors[color]
        else:
            # put the color record there to be matched next time
            colors[color] = 0
    # return the counter
    return count
