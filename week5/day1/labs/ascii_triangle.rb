def ascii_triangle(n_rows)
  char = "O"
  for i in 1..n_rows
      puts (" " * (n_rows - i).ceil) + ((char + " ") * i)
  end
end

ascii_triangle(10)