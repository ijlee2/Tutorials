# Class that models a plain text document, complete with title
# and author:
#
# doc = Document.new('Hamlet', 'Shakespeare', 'To be or...')
# puts doc.title
# puts doc.author
# puts doc.content
#
# Document instances know how to parse their content into words:
#
# puts doc.words
# puts doc.word_count
#
class Document
    attr_accessor :title, :author, :content

    def initialize(title, author, content)
        @title = title
        @author = author
        @content = content
    end

    def words
        @content.split
    end

    def word_count
        words.size
    end
end