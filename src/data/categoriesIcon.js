import React from 'react';

import { ReactComponent as Home } from '../images/icons/category/home.svg';
import { ReactComponent as Products } from '../images/icons/category/products.svg';
import { ReactComponent as Alcohol } from '../images/icons/category/alcohol.svg';
import { ReactComponent as Entertainment } from '../images/icons/category/entertainment.svg';
import { ReactComponent as Health } from '../images/icons/category/health.svg';
import { ReactComponent as Transport } from '../images/icons/category/transport.svg';
import { ReactComponent as Appliances } from '../images/icons/category/appliances.svg';
import { ReactComponent as UtilityBills } from '../images/icons/category/utility-bills.svg';
import { ReactComponent as SportHobby } from '../images/icons/category/sport-hobby.svg';
import { ReactComponent as Education } from '../images/icons/category/education.svg';
import { ReactComponent as Other } from '../images/icons/category/other.svg';
import { ReactComponent as Salary } from '../images/icons/category/salary.svg';
import { ReactComponent as AdditionalIncome } from '../images/icons/category/additional-income.svg';

const categoryIcons = {
  expense: [
    <Products fill="#071F41" height={56} width={63} />,
    <Alcohol fill="#071F41" height={56} width={56} />,
    <Entertainment fill="#071F41" height={56} width={56} />,
    <Health fill="#071F41" height={56} width={56} />,
    <Transport fill="#071F41" height={56} width={56} />,
    <Home fill="#071F41" height={56} width={56} />,
    <Appliances fill="#071F41" height={56} width={56} />,
    <UtilityBills fill="#071F41" height={56} width={56} />,
    <SportHobby fill="#071F41" height={56} width={56} />,
    <Education fill="#071F41" height={56} width={56} />,
    <Other fill="#071F41" height={56} width={56} />,
  ],
  income: [
    <Salary fill="#071F41" height={56} width={56} />,
    <AdditionalIncome fill="#071F41" height={56} width={56} />,
  ],
};

export default categoryIcons;
