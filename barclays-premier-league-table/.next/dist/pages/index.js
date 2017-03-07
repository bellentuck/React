'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('/Users/ellentb/dev/javascriptings/react/barclays-premier-league-table/node_modules/babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('/Users/ellentb/dev/javascriptings/react/barclays-premier-league-table/node_modules/babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('/Users/ellentb/dev/javascriptings/react/barclays-premier-league-table/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('/Users/ellentb/dev/javascriptings/react/barclays-premier-league-table/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('/Users/ellentb/dev/javascriptings/react/barclays-premier-league-table/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('/Users/ellentb/dev/javascriptings/react/barclays-premier-league-table/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('/Users/ellentb/dev/javascriptings/react/barclays-premier-league-table/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('/Users/ellentb/dev/javascriptings/react/barclays-premier-league-table/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _head = require('/Users/ellentb/dev/javascriptings/react/barclays-premier-league-table/node_modules/next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Returns 'Next' template
var _class = function (_Component) {
  (0, _inherits3.default)(_class, _Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);
    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _head2.default,
          null,
          _react2.default.createElement(
            'title',
            null,
            'League Table'
          ),
          _react2.default.createElement('meta', {
            name: 'viewport',
            content: 'initial-scale=1.0, width=device-width'
          }),
          _react2.default.createElement('link', {
            rel: 'stylesheet',
            href: 'https://unpkg.com/purecss@0.6.1/build/pure-min.css'
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'pure-g' },
          _react2.default.createElement('div', { className: 'pure-u-1-3' }),
          _react2.default.createElement(
            'div',
            { className: 'pure-u-1-3' },
            _react2.default.createElement(
              'h1',
              null,
              'Barclays Premier League'
            ),
            _react2.default.createElement(
              'h2',
              null,
              '(Look, Ma, a Table!)'
            ),
            _react2.default.createElement(
              'table',
              { className: 'pure-table' },
              _react2.default.createElement(
                'thead',
                null,
                _react2.default.createElement(
                  'tr',
                  null,
                  _react2.default.createElement(
                    'th',
                    null,
                    'Position'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'Team'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'Points'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'Goals'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'Wins'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'Draws'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'Losses'
                  )
                )
              ),
              _react2.default.createElement(
                'tbody',
                null,
                this.props.data.standing.map(function (standing, i) {
                  var oddOrNot = i % 2 === 1 ? "pure-table-odd" : "";
                  return _react2.default.createElement(
                    'tr',
                    { key: i, className: oddOrNot },
                    _react2.default.createElement(
                      'td',
                      null,
                      standing.position
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      _react2.default.createElement('img', { className: 'pure-img logo', src: standing.crestURI })
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      standing.points
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      standing.goals
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      standing.wins
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      standing.draws
                    ),
                    _react2.default.createElement(
                      'td',
                      null,
                      standing.losses
                    )
                  );
                })
              )
            )
          ),
          _react2.default.createElement('div', { className: 'pure-u-1-3' })
        )
      );
    }
  }], [{
    key: 'getInitialProps',

    // Async operation with getInitialProps
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var res;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _axios2.default.get('http://api.football-data.org/v1/competitions/426/leagueTable');

              case 2:
                res = _context.sent;
                return _context.abrupt('return', { data: res.data });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);
  return _class;
}(_react.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbInByb3BzIiwiZGF0YSIsInN0YW5kaW5nIiwibWFwIiwiaSIsIm9kZE9yTm90IiwicG9zaXRpb24iLCJjcmVzdFVSSSIsInBvaW50cyIsImdvYWxzIiwid2lucyIsImRyYXdzIiwibG9zc2VzIiwiZ2V0IiwicmVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7NkJBVVc7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUVFO0FBQ0Usa0JBQUssVUFEUDtBQUVFLHFCQUFRO0FBRlYsWUFGRjtBQU1FO0FBQ0UsaUJBQUksWUFETjtBQUVFLGtCQUFLO0FBRlA7QUFORixTQURGO0FBYUU7QUFBQTtBQUFBLFlBQUssV0FBVSxRQUFmO0FBQ0UsaURBQUssV0FBVSxZQUFmLEdBREY7QUFFRTtBQUFBO0FBQUEsY0FBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFHRTtBQUFBO0FBQUEsZ0JBQU8sV0FBVSxZQUFqQjtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRjtBQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkY7QUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGO0FBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFORjtBQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRjtBQURGLGVBREY7QUFZRTtBQUFBO0FBQUE7QUFDRyxxQkFBS0EsS0FBTCxDQUFXQyxJQUFYLENBQWdCQyxRQUFoQixDQUF5QkMsR0FBekIsQ0FBNkIsVUFBQ0QsUUFBRCxFQUFXRSxDQUFYLEVBQWlCO0FBQzdDLHNCQUFNQyxXQUFXRCxJQUFFLENBQUYsS0FBUSxDQUFSLEdBQVksZ0JBQVosR0FBK0IsRUFBaEQ7QUFDQSx5QkFDRTtBQUFBO0FBQUEsc0JBQUksS0FBS0EsQ0FBVCxFQUFZLFdBQVdDLFFBQXZCO0FBQ0U7QUFBQTtBQUFBO0FBQUtILCtCQUFTSTtBQUFkLHFCQURGO0FBRUU7QUFBQTtBQUFBO0FBQUksNkRBQUssV0FBVSxlQUFmLEVBQStCLEtBQUtKLFNBQVNLLFFBQTdDO0FBQUoscUJBRkY7QUFHRTtBQUFBO0FBQUE7QUFBS0wsK0JBQVNNO0FBQWQscUJBSEY7QUFJRTtBQUFBO0FBQUE7QUFBS04sK0JBQVNPO0FBQWQscUJBSkY7QUFLRTtBQUFBO0FBQUE7QUFBS1AsK0JBQVNRO0FBQWQscUJBTEY7QUFNRTtBQUFBO0FBQUE7QUFBS1IsK0JBQVNTO0FBQWQscUJBTkY7QUFPRTtBQUFBO0FBQUE7QUFBS1QsK0JBQVNVO0FBQWQ7QUFQRixtQkFERjtBQVdELGlCQWJBO0FBREg7QUFaRjtBQUhGLFdBRkY7QUFtQ0UsaURBQUssV0FBVSxZQUFmO0FBbkNGO0FBYkYsT0FERjtBQXFERDs7OztBQTlERDs7Ozs7Ozs7O3VCQUlvQixnQkFBTUMsR0FBTixDQUFVLDhEQUFWLEM7OztBQUFaQyxtQjtpREFFQyxFQUFDYixNQUFNYSxJQUFJYixJQUFYLEUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2VsbGVudGIvZGV2L2phdmFzY3JpcHRpbmdzL3JlYWN0L2JhcmNsYXlzLXByZW1pZXItbGVhZ3VlLXRhYmxlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG4vLyBSZXR1cm5zICdOZXh0JyB0ZW1wbGF0ZVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICAvLyBBc3luYyBvcGVyYXRpb24gd2l0aCBnZXRJbml0aWFsUHJvcHNcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcbiAgICAvLyByZXMgaXMgYXNzaWduZWQgdGhlIHJlc3BvbnNlLCBvbmNlXG4gICAgLy8gdGhlIGF4aW9zIGFzeW5jIGdldCBjb21wbGV0ZXMuXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vYXBpLmZvb3RiYWxsLWRhdGEub3JnL3YxL2NvbXBldGl0aW9ucy80MjYvbGVhZ3VlVGFibGUnKTtcbiAgICAvLyBSZXR1cm4gcHJvcHNcbiAgICByZXR1cm4ge2RhdGE6IHJlcy5kYXRhfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPkxlYWd1ZSBUYWJsZTwvdGl0bGU+XG4gICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICAgICAgICBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly91bnBrZy5jb20vcHVyZWNzc0AwLjYuMS9idWlsZC9wdXJlLW1pbi5jc3NcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSGVhZD5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtZ1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTEtM1wiPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVyZS11LTEtM1wiPlxuICAgICAgICAgICAgPGgxPkJhcmNsYXlzIFByZW1pZXIgTGVhZ3VlPC9oMT5cbiAgICAgICAgICAgIDxoMj4oTG9vaywgTWEsIGEgVGFibGUhKTwvaDI+XG4gICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwicHVyZS10YWJsZVwiPlxuICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgPHRoPlBvc2l0aW9uPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aD5UZWFtPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aD5Qb2ludHM8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoPkdvYWxzPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aD5XaW5zPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aD5EcmF3czwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGg+TG9zc2VzPC90aD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZGF0YS5zdGFuZGluZy5tYXAoKHN0YW5kaW5nLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBvZGRPck5vdCA9IGklMiA9PT0gMSA/IFwicHVyZS10YWJsZS1vZGRcIiA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpfSBjbGFzc05hbWU9e29kZE9yTm90fT5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3N0YW5kaW5nLnBvc2l0aW9ufTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkPjxpbWcgY2xhc3NOYW1lPVwicHVyZS1pbWcgbG9nb1wiIHNyYz17c3RhbmRpbmcuY3Jlc3RVUkl9Lz48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD57c3RhbmRpbmcucG9pbnRzfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkPntzdGFuZGluZy5nb2Fsc308L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD57c3RhbmRpbmcud2luc308L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD57c3RhbmRpbmcuZHJhd3N9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3N0YW5kaW5nLmxvc3Nlc308L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtMS0zXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19