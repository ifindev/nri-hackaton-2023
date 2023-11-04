import NavbarWrapper from '@shared/components/dumb/NavbarWrapper/NavbarWrapper';
import RouteErrorBoundary from '@shared/components/smart/RouteErrorBoundary/RouteErrorBoundary';
import { RouteObject } from 'react-router-dom';

export const recommendationId = {
  root: 'recommendation',
  index: 'recommendation:index',
} as const;

export const recommendationPath = {
  root: '/recommendation',
  index: undefined,
} as const;

const recommendationIndexRoute = {
  id: recommendationId.index,
  index: true,
  lazy: async () => {
    const { default: RecommendationPage } = await import(
      '../pages/Recommendation.page'
    );

    return {
      // loader: homeLoader, // we use firebase authentication instead of this
      element: <RecommendationPage />,
      errorElement: <RouteErrorBoundary />,
    };
  },
} as const satisfies RouteObject;

export const recommendationRoute = {
  id: recommendationId.root,
  path: recommendationPath.root,
  element: <NavbarWrapper />,
  children: [recommendationIndexRoute],
} satisfies RouteObject;
