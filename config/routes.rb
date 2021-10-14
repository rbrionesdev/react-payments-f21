Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    get 'things', to: 'things#index'
    get "braintree_token", to: 'braintree#token'
    post "payment", to: 'braintree#payment'
  end
end
