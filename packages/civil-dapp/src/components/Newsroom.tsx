import * as React from "react";

export interface NewsroomState {
  listingState: string;
}
export interface NewsroomProps {
  match: any;
}

class Newsroom extends React.Component<NewsroomProps, NewsroomState> {
  public render(): JSX.Element {
    return (
      <div>
        News44room: {this.props.match.params.newsroomAddress}
      </div>
    );
  }
}

export default Newsroom;
