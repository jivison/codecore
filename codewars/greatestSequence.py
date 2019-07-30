def maxSequence(arr):
    seqs = []
    for n in range(len(arr[:-3])):
        seqs.append(sum(arr[n:n + 3]))

    return seqs

print(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))