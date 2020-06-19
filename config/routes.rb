Rails.application.routes.draw do
  devise_for :users
  root 'groups#index'
<<<<<<< Updated upstream
  resources :users, only: [:edit, :update, :index, :get, ]
=======
  resources :users, only: [:index, :edit, :update]
>>>>>>> Stashed changes
  resources :groups, only: [:index, :new, :create, :edit, :update] do
    resources :messages, only: [:index, :create]
    namespace :api do
      resources :messages, only: :index, defaults: { format: 'json' }
    end
  end
end
