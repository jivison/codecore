def likes(names):
    if len(names) == 0:
        return "no one likes this"
    elif len(names) == 1:
        return f"{names[0]} likes this"
    elif len(names) >= 2 and len(names)  < 4:   
        return ", ".join(names[:-1]) + " and " + names[-1] + " like this"
    elif len(names) >= 4:
        return f"{names[0]}, {names[1]} and {len(names) - 2} others like this"

print(likes(['Max', 'John', 'Mark']))