def countingValleys(steps, path):
    # Write your code here
    # we need counter for valleys and a level for current level
    count = 0
    level = 0
    # we loop our path and calculate the valleys
    for step in path:
        if step == "U":
            # if step is towards up level up 1 times
            level = level + 1
            # valleys are always completed on upwards and level = 0
            if level == 0:
                count = count + 1
        else:
            # if downwards decrease the level
            level = level - 1
    # at the end we return count
    return count