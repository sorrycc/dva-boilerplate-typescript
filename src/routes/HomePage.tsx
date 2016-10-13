import { connect } from 'dva';

function HomePage(props) {
  return (
    <div>
      Count: { props.count }
    </div>
  );
}

function mapStateToProps(state) {
  return {
    count: state.count,
  };
}

export default connect(mapStateToProps)(HomePage);
