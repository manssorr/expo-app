> ref: https://peacockindia.mintlify.app/docs/organizing-imports

1. core packages (e.g. React, React Router, Next, etc…)
2. assets (e.g. images, SVGs, icons, etc…)
3. component/shared ui/sub pages
4. third-party packages
5. configuration files/utils/types/validation schema/hooks/custom hooks/sate management
6. api functions/services

```javascript
// ** Core Packages
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// **** Assets ****
// ** import icons
import BackSvg from '@icons/BackSvg';
import SearchSvg from '@icons/SearchSvg';

// ** import assets
import googleSvg from '@svg/google.svg';
import AbsoluteLogo from '@svg/AbsoluteLogo.svg';
import frontGirl from '@illustration/FrontGirl.svg';
import userImage from '@illustration/userImage.webp';

// ** import third party
import { toast } from 'react-toastify';
import { CircularProgress } from '@nextui-org/react';

// ** import shared components
import Image from '@shared/Image';
import Button from '@shared/Button';
import Typography from '@shared/Typography';

// ** import specific components
import AddFoodItem from '@components/AddFoodItem';
import CalendarPopup from '@components/CalendarPopup';

// ** import sub pages/sections
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';

// ** import config
import env from '@src/config';

// ** import state manager
import { useDispatch } from 'react-redux';
import { setLocale } from '@src/redux/slices/language';

// ** import utils
import { useStorableState } from '@utils/useStorable';

// ** import hooks
import useStorable from '@src/utils/useStorable';

// ** import apis
import { getUserProfileApi } from '@api/auth';
import { confirmOrderApi } from '@api/cart';
```

```javascript
// ** Core Packages
// **** Assets ****
// ** import icons
// ** import assets
// ** import third party
// ** import shared components
// ** import specific components
// ** import sub pages/sections
// ** import config
// ** import state manager
// ** import utils
// ** import hooks
// ** import apis
```
