class Board
  attr_reader :spaces

  def initialize(width = 8, height = 8)
    @spaces = (0...width).map do
      Array.new(height) { |i| " " }
    end
  end

  def display()
    puts
    print "   "
    @spaces.each_with_index { |col, col_no| print col_no.to_s + " " }
    puts
    @spaces.each.with_index do |row, row_no|
      print row_no.to_s + "| "
      puts row.join(" ")
    end
  end

  def validate_move_with_piece(piece, colour, start_position, end_position)

    acceptable_move_hash = {
      "rook" => ->(start_position) {
        (start_position[0] + 1...@spaces[0].length).to_a.concat((start_position[0].downto(0)).to_a).map { |row_number|
          [row_number, start_position[1]]
        }
          .concat(
            (start_position[1] + 1...@spaces[1].length).to_a.concat((start_position[1].downto(0)).to_a).map { |col_number|
              [start_position[0], col_number]
            }
          )
      },
      "pawn" => ->(start_position) {
        possible_moves = []
        new_y = start_position[1] + ((colour == "white") ? -1 : 1)
        if @spaces[start_position[1] + ((colour == "white") ? -1 : 1)][start_position[0]] == " "
          possible_moves << [start_position[0], new_y]
        end
        if @spaces[start_position[1] + ((colour == "white") ? -1 : 1)][start_position[0] + 1] != " "
          possible_moves << [start_position[0] + 1, new_y]
        end
        if @spaces[start_position[1] + ((colour == "white") ? -1 : 1)][start_position[0] - 1] != " "
          possible_moves << [start_position[0] - 1, new_y]
        end
        possible_moves
      },
      "bishop" => ->(start_position) {
        coefficient = ((colour == "white") ? -1 : 1)
        puts coefficient
        (start_position[1]..@spaces.length).to_a.map.with_index{ |new_col, index|
          [new_col, start_position[0] + index * coefficient]
        }
      }
    }

    acceptable_move_hash[piece].call(start_position)
    # .include? end_position
  end

  def get_colour_piece(piece)
    if ["♜", "♝", "♞", "♚", "♛", "♟"].include? piece
      "white"
    elsif ["♖", "♗", "♘", "♔", "♕", "♙"].include? piece
      "black"
    else
      "empty space"
    end
  end

  def validate_piece_with_colour(colour, piece)
    return colour == get_colour_piece(piece)
  end

  def validate_spaces(*spaces, silent: false)
    spaces.each { |space|
      if space.length == 2
        if space[1] > @spaces.length - 1 || space[0] > @spaces[0].length - 1
          puts "ERROR: An invalid space was requested!" unless silent
          return false
        end
      else
        puts "ERROR: An invalid space was requested!" unless silent
        return false
      end
    }
    true
  end

  def validate_move(current_player, start_position: [-1, -1], new_position: [-1, -1])
    if !validate_spaces(start_position, new_position)
      return false
    elsif !validate_piece_with_colour(current_player, @spaces[start_position[1]][start_position[0]])
      puts "ERROR: The piece at '#{start_position[1]}, #{start_position[0]}' is not in your colour! (#{current_player})"
      return false
    elsif get_colour_piece(@spaces[start_position[1]][start_position[0]]) == get_colour_piece(@spaces[new_position[1]][new_position[0]])
      puts "ERROR: You can't kill one of your own pieces..."
      return false
    # elsif !validate_move_with_piece(start_position, new_position)
    #   puts "ERROR: That is not a valid move for that piece (#{@spaces[start_position[1]][start_position[0]]})"
    #   return false
    else
      if @spaces[start_position[1]][start_position[0]] == " "
        puts "ERROR: There is no piece at '#{start_position[1]}, #{start_position[0]}'"
        return false
      end
    end
    return true
  end

  def generate_pieces
    pieces = [
      { symbol: "♖", position: [0, 0] }, { symbol: "♘", position: [1, 0] }, { symbol: "♗", position: [2, 0] }, { symbol: "♔", position: [3, 0] }, { symbol: "♕", position: [4, 0] }, { symbol: "♗", position: [5, 0] }, { symbol: "♘", position: [6, 0] }, { symbol: "♖", position: [7, 0] }, { symbol: "♙", position: [0, 1] }, { symbol: "♙", position: [1, 1] }, { symbol: "♙", position: [2, 1] }, { symbol: "♙", position: [3, 1] }, { symbol: "♙", position: [4, 1] }, { symbol: "♙", position: [5, 1] }, { symbol: "♙", position: [6, 1] }, { symbol: "♙", position: [7, 1] }, { symbol: "♜", position: [0, 7] }, { symbol: "♞", position: [1, 7] }, { symbol: "♝", position: [2, 7] }, { symbol: "♛", position: [3, 7] }, { symbol: "♚", position: [4, 7] }, { symbol: "♝", position: [5, 7] }, { symbol: "♞", position: [6, 7] }, { symbol: "♜", position: [7, 7] }, { symbol: "♟", position: [0, 6] }, { symbol: "♟", position: [1, 6] }, { symbol: "♟", position: [2, 6] }, { symbol: "♟", position: [3, 6] }, { symbol: "♟", position: [4, 6] }, { symbol: "♟", position: [5, 6] }, { symbol: "♟", position: [6, 6] }, { symbol: "♟", position: [7, 6] },
    ]

    pieces.each { |piece_info|
      @spaces[piece_info[:position][1]][piece_info[:position][0]] = piece_info[:symbol]
    }
  end

  def make_move(current_player, start_position, new_position)
    if validate_move(current_player, start_position: start_position, new_position: new_position)
      @spaces[new_position[1]][new_position[0]] = @spaces[start_position[1]][start_position[0]]
      @spaces[start_position[1]][start_position[0]] = " "
      return true
    end
    return false
  end
end

board = Board.new

board.generate_pieces

# turn = 0
# loop do
#     current_player = ["white", "black"][turn % 2]

#     board.display

#     puts "#{current_player.capitalize}'s turn:"
#     print "Start piece (row, col): "
#     start_piece = gets.chomp.split(/ *,/).map { |element| element.to_i }
#     print "End location (row, col): "
#     end_location = gets.chomp.split(/ *,/).map { |element| element.to_i }
#     puts
#     if board.make_move(current_player, start_piece, end_location)
#         turn += 1
#     else

#     end

# end

piece_names = {
  "♙" => "pawn",
  "♟" => "pawn",
  "♖" => "rook",
  "♜" => "rook",
  "♗" => "bishop",
  "♝" => "bishop"
}

board.make_move("white", [4, 6], [4, 5])
board.display 
p board.validate_move_with_piece("bishop", "white", [5, 7], [3, 5])
