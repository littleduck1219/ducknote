export interface LayoutProps {
  children: React.ReactNode;
  modal?: React.ReactNode;
}

export interface ParamsProps {
  searchParams?: {
    q?: string;
    f?: string;
    pf?: string;
  };
  params: string;
}

export interface PostProps {
  children: ReactNode;
  post: {
    postId: number;
    content: string;
    User: {
      id: string;
      nickname: string;
      image: string;
    };
    createdAt: Date;
    Images: any[];
  };
}
