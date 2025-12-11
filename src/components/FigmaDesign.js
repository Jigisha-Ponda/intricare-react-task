// import React from 'react';
// import { Link } from 'react-router-dom';

// function FigmaDesign() {
//   return (
//     <div className="min-h-screen">
//       <nav className="navbar navbar-expand-lg bg-body-tertiary">
//         <div className="container-fluid">
//           <Link className="navbar-brand" to="/figma">Navbar</Link>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link className="nav-link active" to="/">Home</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/about">Link</Link>
//               </li>
//               <li className="nav-item dropdown">
//                 <button className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
//                   Dropdown
//                 </button>
//                 <ul className="dropdown-menu">
//                   <li><Link className="dropdown-item" to="/action">Action</Link></li>
//                   <li><Link className="dropdown-item" to="/another">Another action</Link></li>
//                 </ul>
//               </li>
//             </ul>
//             <form className="d-flex" role="search">
//               <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//               <button className="btn btn-outline-success" type="submit">Search</button>
//             </form>
//           </div>
//         </div>
//       </nav>
//       <nav className="navbar navbar-expand-lg bg-body-tertiary">
//   <div className="container-fluid">
//     <a className="navbar-brand" href="/figma">Navbar</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarNav">
//       <ul className="navbar-nav">
//         <li className="nav-item">
//           <Link className="nav-link active" aria-current="page" to="/">Home</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/">Features</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/">Pricing</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>
//     </div>
//   )
// }

// export default FigmaDesign


function FigmaDesign() {
  return (
    <iframe
      src="/figma.html"
      className="w-full h-screen border-0"
      title="Figma Design"
    ></iframe>
  );
}

export default FigmaDesign;