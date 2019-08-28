# Symbols are a special kind of string
# Symbols are immutable
# They are a practical data structure for text
# When the symbol is created, if the symbol name already exists, that one will be used instead of creating another
# This makes them useful for keys in hashes


# To create a symbol, write a word prefixed with a colon `:`
:i_am_a_symbol

# :i-am-not-valid => Invalid symbol

:"I am valid, but not very useful"


personal_information = {
    # The keys here are symbols
    name: "John",
    location: "Vancouver",
    age: 17
}   