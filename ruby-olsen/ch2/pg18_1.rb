# Class that models a plain text document, with the option of
# making it read-only, complete with title and author:
#
class Document
    attr_accessor :writable, :read_only
    attr_accessor :title, :author, :content

    # Much of the class omitted...

    def title=( new_title )
        if @writable
            @title = new_title
        end

=begin
        unless @read_only
            @title = new_title
        end
=end
    end

    # Similar author= and content= methods omitted...
end