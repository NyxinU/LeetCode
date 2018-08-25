def auto_bio_finder(num)
  arr_copy = Array.new(num, 0)

  until is_auto_bio?(arr_copy)
    arr_copy.each_with_index do |el, idx| 
      arr_copy[idx] = arr_copy.count(idx)
    end 
  end 

  p arr_copy
end 



def is_auto_bio?(arr)
  arr.each_with_index do |el, idx| 
    return false unless arr.count(idx) == el && el < 10
  end 
  true
end 

# def auto_bio_finder(arr)
#   arr_copy = arr.dup()
#   counter = Array.new(10,0)

#   arr_copy.each do |el|
#     counter[el] += 1
#   end 

#   # until arr_copy == counter 

#   # end 

#   p arr_copy 
#   p counter
# end 

auto_bio_finder(13)

# p is_auto_bio?([6, 2, 1, 0, 0, 0, 1, 0, 0, 0])