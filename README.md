# GadgetHeaven✨

Your go-to destination for the latest and greatest gadgets.

[Live Website Link](https://your-live-website-link.com)  
[Requirement Document Link](https://your-requirement-document-link.com)

---

## Table of Contents
1. [Project Overview](#project-overview)
2. [React Fundamentals Used](#react-fundamentals-used)
3. [Data Management](#data-management)
4. [Core Features](#core-features)
5. [Additional Features](#additional-features)
6. [Project Setup](#project-setup)
7. [Future Enhancements](#future-enhancements)

---

### Project Overview
GadgetHeaven is an e-commerce platform where users can browse and purchase the latest gadgets. The application offers structured navigation, an intuitive user interface, and several core e-commerce features to ensure a smooth and user-friendly experience. The project is built with React, based on a detailed Figma design.

---

### React Fundamentals Used
- **Components and Props**: Modular components for easy reuse across pages.
- **State Management**: `useState` and `useReducer` for local state management.
- **Context API**: Manages global states for the cart and wishlist across pages.
- **React Router**: Used for page navigation, including custom routes and a 404 page.
- **useEffect Hook**: Loads initial data and manages side effects, including updates to LocalStorage.

---

### Data Management
Data handling is done using the Context API, providing a centralized state for the cart and wishlist across pages. LocalStorage is also used to persist user data across sessions, ensuring a seamless experience even upon page reloads.

---

### Core Features
1. **Dynamic Navbar and Footer**: Persistent across all pages with active route indication.
2. **Home Page with Banner and Category Sidebar**: Users can view product categories, a featured banner, and a grid layout for quick browsing.
3. **Product Details Page**: Displays detailed information about each gadget with options to add items to the cart or wishlist.
4. **Shopping Cart and Wishlist**: Accessible via tabs on the Dashboard, with a sortable list and total price display.
5. **Product Filtering and Sorting**: Category-specific filtering and a sorting option for cart items based on price.

---

### Additional Features
- **Toasts**: Show messages when items are added to the cart or wishlist.
- **Conditional Rendering**: Disable buttons based on the cart or wishlist state.
- **Responsive Design**: Follows Figma layout for a consistent experience across devices.
- **Custom Modal for Purchases**: Confirm purchases with a congratulatory message and reset the cart.

---

### Project Setup
To set up this project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-repo/GadgetHeaven.git
   cd GadgetHeaven
