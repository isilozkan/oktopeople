import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import IndexPage from './pages/Index.js';
import ConnectPage from './pages/Connect.js';
import UxProductPage from './pages/Ux-product.js';
import UxBlogPage from './pages/Ux-blog.js';
import UxBlogGenerativeAiAndPersonalizedExperiencesPage from './pages/Ux-blog-generative_ai_and_personalized_experiences.js';
import UxServicesPage from './pages/Ux-services.js';
import UxDesignProcessPage from './pages/Ux-design-process.js';
import UxPricingPage from './pages/Ux-pricing.js';
import UxBlogWeb3AndUserCentricDesignPage from './pages/Ux-blog-web3_and_user-centric_design.js';
import UxBlogGenerativeAiAndPersonalizedExperiencesDuplicate1Page from './pages/Ux-blog-generative_ai_and_personalized_experiences-duplicate1.js';
import UxDesignTeamStoryPage from './pages/Ux-design-team-story.js';
import UxDesignFaqPage from './pages/Ux-design-faq.js';
import _404Page from './pages/404.js';
import TestPage from './pages/Test.js';
import SitemapPage from './pages/Sitemap.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
         
      <Route path="/connect" element={<ConnectPage />} />
         
      <Route path="/uxproduct" element={<UxProductPage />} />
         
      <Route path="/uxblog" element={<UxBlogPage />} />
         
      <Route path="/uxbloggenerativeaiandpersonalizedexperiences" element={<UxBlogGenerativeAiAndPersonalizedExperiencesPage />} />
         
      <Route path="/uxservices" element={<UxServicesPage />} />
         
      <Route path="/uxdesignprocess" element={<UxDesignProcessPage />} />
         
      <Route path="/uxpricing" element={<UxPricingPage />} />
         
      <Route path="/uxblogweb3andusercentricdesign" element={<UxBlogWeb3AndUserCentricDesignPage />} />
         
      <Route path="/uxbloggenerativeaiandpersonalizedexperiencesduplicate1" element={<UxBlogGenerativeAiAndPersonalizedExperiencesDuplicate1Page />} />
         
      <Route path="/uxdesignteamstory" element={<UxDesignTeamStoryPage />} />
         
      <Route path="/uxdesignfaq" element={<UxDesignFaqPage />} />
         
      <Route path="/404" element={<_404Page />} />
         
      <Route path="/test" element={<TestPage />} />
         
      <Route path="/sitemap" element={<SitemapPage />} />
    </Routes>
  );
}

export default App;
