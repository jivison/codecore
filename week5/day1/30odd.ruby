i = 0
while i < 60
    puts i unless i % 2 == 0 
    i ++
end 


for i in (1..60)
    puts i if i.odd?
end

