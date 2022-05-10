# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# BlogPostController inherits from ApplicationController
# the method 'index' is defined on line 13
class BlogPostsController < ApplicationController
  def index
    # ---2)
    @post = BlogPost.all
  end
  # The method 'index' is going to post all of the BlogPosts

  # ---3)
  # this method will return a specific BlogPost based off the entered primary key value attached to .find
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  #this method will generate a form for a new entry to the BlogPost table 
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
    # This method will send the data input from the 'new' method and add it to the BlogPost table, if the input does not follow the allowed paramater guidelines the post will redirect back to the new user form for the input. 
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6)
    # The method edit will generate a form for the original input to be adjusted and resent to the database. 
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    # The update method will send the input from edit to the database table BlogPost, if the input does not follow the allowed paramater guidelines the post will redirect back to the blog_post
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) 
      # Deleting a specific blog post based off its id# if unable to delete it will redirect back to the blog post
      redirect_to blog_post_path(@post)
    end
  end

  # ---9)
  # 'private' restricts the scope of a method 
  private
  def blog_post_params
    # ---10)
    #Only allows posts that follow these guidelines of title and content to be added to the BlogPost table.
    params.require(:blog_post).permit(:title, :content)
  end
end
