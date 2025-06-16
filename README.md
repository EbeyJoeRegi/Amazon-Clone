# Amazon Clone Frontend

## Introduction
The **Amazon Clone** is a frontend e-commerce project built using **React, HTML, CSS, Bootstrap, and JavaScript**. The project replicates core functionalities of Amazon, including product listing, cart management, search & filtering, checkout, dark mode, and local storage for cart persistence.

## Project Structure
```
amazon-clone/
│── public/                         # Static assets
│   ├── icons/                      
│   ├── images/                    
│── src/                            
│   ├── components/                 
│   │   ├── Banner.js               # Banner component
│   │   ├── Header.js               # Header component
│   │   ├── MainNavbar.js           # Main navigation bar
│   │   ├── MobileNavbar.js         # Mobile navigation bar
│   │   ├── Navbar.js               # Combined navbar component
│   │   ├── NotFound.js             # 404 Not Found page
│   │   ├── ProductGrid.js          # Product grid layout
│   │   ├── ProductCard.js          # Individual product card
│   │   ├── ProductDetails.js       # Product details page
│   │   ├── SearchResults.js        # Search results page
│   │   ├── Cart.js                 # Shopping cart
│   │   ├── Checkout.js             # Checkout page
│   │   ├── SignIn.js               # Sign-in page
│   │   ├── SignUp.js               # Sign-up page
│   │   ├── ThemeSwitcher.js        # Dark mode switch
│   ├── context/                    
│   │   ├── CartContext.js          # Manages cart state
│   │   ├── ThemeContext.js         # Manages dark mode state
│   ├── data/                      
│   │   ├── banner.json             # Banner data
│   │   ├── products.json           # Product list
│   │   ├── productdetails.json     # Product information
│   │   ├── userdetails.json        # User details
│   ├── styles/                     
│   │   ├── Style.css               # Global styles
│   │   ├── Banner.css              # Styles for Banner component
│   │   ├── Header.css              # Styles for MobileNavbar component
│   │   ├── Navbar.css              # Styles for Navbar component
│   │   ├── NotFound.css            # Styles for NotFound component
│   │   ├── ProductGrid.css         # Styles for ProductGrid component
│   │   ├── ProductCard.css         # Styles for ProductCard component
│   │   ├── ProductDetails.css      # Styles for ProductDetails component
│   │   ├── SearchResults.css       # Styles for SearchResults component
│   │   ├── Cart.css                # Styles for Cart component
│   │   ├── Checkout.css            # Styles for Checkout component
│   │   ├── SignIn.css              # Styles for SignIn component
│   │   ├── SignUp.css              # Styles for SignUp component
│   │   ├── ThemeSwitcher.css       # Styles for ThemeSwitcher component
│   ├── App.js                   
│   ├── main.js                    
```

## Features & Functionalities
- **Product Listing & Search**: Search products by category and filter by price.
- **Cart Management**: Add, remove, and update items in the shopping cart.
- **Checkout Process**: Select address and payment method before placing an order.
- **User Authentication**: Sign-in and sign-up functionality (with mock user data).
- **Dark Mode**: Toggle between light and dark themes using Context API.
- **Local Storage**: Cart and theme preferences persist between sessions.
- **Responsive Design**: Mobile-friendly and optimized for various screen sizes.

## State Management & Data Flow
The application follows a structured approach for handling UI state and data flow:

- **Local State (`useState`)**: Handles small UI interactions (e.g., toggling dark mode, managing form inputs).
- **Global State (`useContext`)**:
  - **CartContext**: Stores cart items and manages cart updates across components.
  - **ThemeContext**: Stores the dark mode state and updates the theme globally.
- **Data Fetching**: JSON files mimic API responses, serving as the product and user data source.

## Installation Guide
1. Clone the repository:
   ```bash
   git clone https://github.com/EbeyJoeRegi/Amazon-Clone.git
   cd amazon-clone
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Build the project for production:
   ```sh
   npm run build
   ```
5. Open the browser and visit:
   ```
   http://localhost:5173
   ```

## Deployment
- **Live Site**: [Amazon Clone](https://amazon-clone-ek25.netlify.app/)
- **Source Code**: [GitHub Repository](https://github.com/EbeyJoeRegi/Amazon-Clone)

## Future Enhancements
- **Backend Integration**: Connect with a database for real user authentication and product management.
- **Payment Gateway**: Implement actual payment processing.
- **Order History**: Store user orders and enable order tracking.
- **Redux Implementation**: Manage authentication and session handling.

## Conclusion
This project successfully replicates the Amazon shopping experience, incorporating essential features such as product listing, search & filtering, checkout, dark mode, and cart management. Future improvements include backend integration, payment handling, and order tracking.

## References
- [React Documentation](https://react.dev/)
- [Bootstrap](https://getbootstrap.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Amazon.in](https://amazon.in)

