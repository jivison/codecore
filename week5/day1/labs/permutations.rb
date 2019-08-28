# def permutate(arr)
#     for permutation in arr.to_a.permutation
#         puts permutation.join(", ")
#     end
# end

def permutate_no_method(arr)
    for first_elem in arr do
        rest_of_arr = arr.to_a.dup
        rest_of_arr.delete(first_elem)

        for remaining_elem in rest_of_arr
            puts first_elem + ", " + rest_of_arr.push(rest_of_arr.shift).join(", ")
        end
    end
end

permutate_no_method(("a".."f"))