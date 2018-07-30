# By convention, we list the standard CRUD actions in the following order:
# index, show, new, edit, create, update, destroy. If there are private methods,
# these go after the public ones.

class ArticlesController < ApplicationController
    def index
        @articles = Article.all
    end

    def show
        @article = Article.find(params[:id])
    end

    def new
        @article = Article.new
    end

    def create
        # render plain: params[:article].inspect

        @article = Article.new(article_params)

        if @article.save
            redirect_to @article

        else
            render 'new'

        end
    end

    private
        def article_params
            params.require(:article).permit(:title, :text)
        end
end
