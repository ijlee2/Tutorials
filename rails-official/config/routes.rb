Rails.application.routes.draw do
    get 'welcome/index'     # Map requests to http://localhost:3000/welcome/index
                            # to the welcome controller's index action

    resources :articles

    root 'welcome#index'    # Map requests to the root of the application to the
                            # welcome controller's `index` action

    # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
