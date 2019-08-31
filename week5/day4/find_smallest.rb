def minimum(*args)
    args.reduce { |curr_min, arg| ((arg < curr_min) ? arg : curr_min) }
end



p minimum(9, 1, 2, 4611686018427387903, 0, -100)