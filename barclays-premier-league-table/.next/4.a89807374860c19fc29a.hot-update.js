webpackHotUpdate(4,{

/***/ 164:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _regenerator = __webpack_require__(152);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	var _asyncToGenerator2 = __webpack_require__(151);
	
	var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
	
	var _stringify = __webpack_require__(166);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _getPrototypeOf = __webpack_require__(44);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(49);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(50);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(52);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(51);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _react = __webpack_require__(106);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _head = __webpack_require__(122);
	
	var _head2 = _interopRequireDefault(_head);
	
	var _link = __webpack_require__(165);
	
	var _link2 = _interopRequireDefault(_link);
	
	var _axios = __webpack_require__(132);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var _class = function (_Component) {
	  (0, _inherits3.default)(_class, _Component);
	
	  function _class() {
	    (0, _classCallCheck3.default)(this, _class);
	    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
	  }
	
	  (0, _createClass3.default)(_class, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      // Cache data in localStorage if not already cached
	      if (!sessionStorage.getItem('bpl')) {
	        sessionStorage.setItem('bpl', (0, _stringify2.default)(this.props.data));
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var detailStyle = {
	        ul: {
	          marginTop: '100px'
	        }
	      };
	
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
	          _react2.default.createElement('div', { className: 'pure-u-8-24' }),
	          _react2.default.createElement(
	            'div',
	            { className: 'pure-u-4-24' },
	            _react2.default.createElement(
	              'h2',
	              null,
	              this.props.standing[0].teamName
	            ),
	            _react2.default.createElement('img', { src: this.props.standing[0].crestURI, className: 'pure-img' }),
	            _react2.default.createElement(
	              'h3',
	              null,
	              'Points: ',
	              this.props.standing[0].points
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'pure-u-12-24' },
	            _react2.default.createElement(
	              'ul',
	              { style: detailStyle.ul },
	              _react2.default.createElement(
	                'li',
	                null,
	                _react2.default.createElement(
	                  'strong',
	                  null,
	                  'Goals'
	                ),
	                ': ',
	                this.props.standing[0].goals
	              ),
	              _react2.default.createElement(
	                'li',
	                null,
	                _react2.default.createElement(
	                  'strong',
	                  null,
	                  'Wins'
	                ),
	                ': ',
	                this.props.standing[0].wins
	              ),
	              _react2.default.createElement(
	                'li',
	                null,
	                _react2.default.createElement(
	                  'strong',
	                  null,
	                  'Losses'
	                ),
	                ': ',
	                this.props.standing[0].losses
	              ),
	              _react2.default.createElement(
	                'li',
	                null,
	                _react2.default.createElement(
	                  'strong',
	                  null,
	                  'Draws'
	                ),
	                ': ',
	                this.props.standing[0].draws
	              ),
	              _react2.default.createElement(
	                'li',
	                null,
	                _react2.default.createElement(
	                  'strong',
	                  null,
	                  'Goals Against'
	                ),
	                ': ',
	                this.props.standing[0].goalsAgainst
	              ),
	              _react2.default.createElement(
	                'li',
	                null,
	                _react2.default.createElement(
	                  'strong',
	                  null,
	                  'Goal Difference'
	                ),
	                ': ',
	                this.props.standing[0].goalDifference
	              ),
	              _react2.default.createElement(
	                'li',
	                null,
	                _react2.default.createElement(
	                  'strong',
	                  null,
	                  'Games Played'
	                ),
	                ': ',
	                this.props.standing[0].playedGames
	              )
	            ),
	            _react2.default.createElement(
	              _link2.default,
	              { href: '/' },
	              'Home'
	            )
	          )
	        )
	      );
	    }
	  }], [{
	    key: 'getInitialProps',
	    value: function () {
	      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref2) {
	        var query = _ref2.query;
	        var id, res, bplData;
	        return _regenerator2.default.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                id = query.id;
	
	                if (process.browser) {
	                  _context.next = 8;
	                  break;
	                }
	
	                _context.next = 4;
	                return _axios2.default.get('http://api.football-data.org/v1/competitions/426/leagueTable');
	
	              case 4:
	                res = _context.sent;
	                return _context.abrupt('return', {
	                  data: res.data,
	                  // Filter and return data based on query
	                  standing: res.data.standing.filter(function (s) {
	                    return s.position == id;
	                  })
	                });
	
	              case 8:
	                // Not on the server - just navigating -
	                // so use the cache
	                bplData = JSON.parse(sessionStorage.getItem('bpl'));
	                // Filter and return data based on query
	
	                return _context.abrupt('return', { standing: bplData.standing.filter(function (s) {
	                    return s.position == id;
	                  }) });
	
	              case 10:
	              case 'end':
	                return _context.stop();
	            }
	          }
	        }, _callee, this);
	      }));

	      function getInitialProps(_x) {
	        return _ref.apply(this, arguments);
	      }

	      return getInitialProps;
	    }()
	  }]);
	  return _class;
	}(_react.Component);

	exports.default = _class;
	//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2RldGFpbHMuanMiXSwibmFtZXMiOlsic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsInByb3BzIiwiZGF0YSIsImRldGFpbFN0eWxlIiwidWwiLCJtYXJnaW5Ub3AiLCJzdGFuZGluZyIsInRlYW1OYW1lIiwiY3Jlc3RVUkkiLCJwb2ludHMiLCJnb2FscyIsIndpbnMiLCJsb3NzZXMiLCJkcmF3cyIsImdvYWxzQWdhaW5zdCIsImdvYWxEaWZmZXJlbmNlIiwicGxheWVkR2FtZXMiLCJxdWVyeSIsImlkIiwicHJvY2VzcyIsImJyb3dzZXIiLCJnZXQiLCJyZXMiLCJmaWx0ZXIiLCJzIiwicG9zaXRpb24iLCJicGxEYXRhIiwiSlNPTiIsInBhcnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O3dDQXNCc0I7QUFDbEI7QUFDQSxVQUFJLENBQUNBLGVBQWVDLE9BQWYsQ0FBdUIsS0FBdkIsQ0FBTCxFQUFvQztBQUNsQ0QsdUJBQWVFLE9BQWYsQ0FBdUIsS0FBdkIsRUFBOEIseUJBQWUsS0FBS0MsS0FBTCxDQUFXQyxJQUExQixDQUE5QjtBQUNEO0FBQ0Y7Ozs2QkFHUTtBQUNQLFVBQU1DLGNBQWM7QUFDbEJDLFlBQUk7QUFDRkMscUJBQVc7QUFEVDtBQURjLE9BQXBCOztBQU1BLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBRUU7QUFDRSxrQkFBSyxVQURQO0FBRUUscUJBQVE7QUFGVixZQUZGO0FBTUU7QUFDRSxpQkFBSSxZQUROO0FBRUUsa0JBQUs7QUFGUDtBQU5GLFNBREY7QUFhRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFFBQWY7QUFDRSxpREFBSyxXQUFVLGFBQWYsR0FERjtBQUVFO0FBQUE7QUFBQSxjQUFLLFdBQVUsYUFBZjtBQUNFO0FBQUE7QUFBQTtBQUFLLG1CQUFLSixLQUFMLENBQVdLLFFBQVgsQ0FBb0IsQ0FBcEIsRUFBdUJDO0FBQTVCLGFBREY7QUFFRSxtREFBSyxLQUFLLEtBQUtOLEtBQUwsQ0FBV0ssUUFBWCxDQUFvQixDQUFwQixFQUF1QkUsUUFBakMsRUFBMkMsV0FBVSxVQUFyRCxHQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUE7QUFBYSxtQkFBS1AsS0FBTCxDQUFXSyxRQUFYLENBQW9CLENBQXBCLEVBQXVCRztBQUFwQztBQUhGLFdBRkY7QUFPRTtBQUFBO0FBQUEsY0FBSyxXQUFVLGNBQWY7QUFDRTtBQUFBO0FBQUEsZ0JBQUksT0FBT04sWUFBWUMsRUFBdkI7QUFDRTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFKO0FBQUE7QUFBNkIscUJBQUtILEtBQUwsQ0FBV0ssUUFBWCxDQUFvQixDQUFwQixFQUF1Qkk7QUFBcEQsZUFERjtBQUVFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQUo7QUFBQTtBQUE0QixxQkFBS1QsS0FBTCxDQUFXSyxRQUFYLENBQW9CLENBQXBCLEVBQXVCSztBQUFuRCxlQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBSjtBQUFBO0FBQThCLHFCQUFLVixLQUFMLENBQVdLLFFBQVgsQ0FBb0IsQ0FBcEIsRUFBdUJNO0FBQXJELGVBSEY7QUFJRTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFKO0FBQUE7QUFBNkIscUJBQUtYLEtBQUwsQ0FBV0ssUUFBWCxDQUFvQixDQUFwQixFQUF1Qk87QUFBcEQsZUFKRjtBQUtFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQUo7QUFBQTtBQUFxQyxxQkFBS1osS0FBTCxDQUFXSyxRQUFYLENBQW9CLENBQXBCLEVBQXVCUTtBQUE1RCxlQUxGO0FBTUU7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBSjtBQUFBO0FBQXVDLHFCQUFLYixLQUFMLENBQVdLLFFBQVgsQ0FBb0IsQ0FBcEIsRUFBdUJTO0FBQTlELGVBTkY7QUFPRTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFKO0FBQUE7QUFBb0MscUJBQUtkLEtBQUwsQ0FBV0ssUUFBWCxDQUFvQixDQUFwQixFQUF1QlU7QUFBM0Q7QUFQRixhQURGO0FBVUU7QUFBQTtBQUFBLGdCQUFNLE1BQUssR0FBWDtBQUFBO0FBQUE7QUFWRjtBQVBGO0FBYkYsT0FERjtBQW9DRDs7Ozs7WUF0RTZCQyxLLFNBQUFBLEs7Ozs7OztBQUN0QkMsa0IsR0FBS0QsTUFBTUMsRTs7b0JBQ1pDLFFBQVFDLE87Ozs7Ozt1QkFFTyxnQkFBTUMsR0FBTixDQUFVLDhEQUFWLEM7OztBQUFaQyxtQjtpREFDQztBQUNMcEIsd0JBQU1vQixJQUFJcEIsSUFETDtBQUVMO0FBQ0FJLDRCQUFVZ0IsSUFBSXBCLElBQUosQ0FBU0ksUUFBVCxDQUFrQmlCLE1BQWxCLENBQXlCO0FBQUEsMkJBQUtDLEVBQUVDLFFBQUYsSUFBY1AsRUFBbkI7QUFBQSxtQkFBekI7QUFITCxpQjs7O0FBTVA7QUFDQTtBQUNNUSx1QixHQUFVQyxLQUFLQyxLQUFMLENBQVc5QixlQUFlQyxPQUFmLENBQXVCLEtBQXZCLENBQVgsQztBQUNoQjs7aURBQ08sRUFBQ08sVUFBVW9CLFFBQVFwQixRQUFSLENBQWlCaUIsTUFBakIsQ0FBd0I7QUFBQSwyQkFBS0MsRUFBRUMsUUFBRixJQUFjUCxFQUFuQjtBQUFBLG1CQUF4QixDQUFYLEUiLCJmaWxlIjoiZGV0YWlscy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZWxsZW50Yi9kZXYvamF2YXNjcmlwdGluZ3MvcmVhY3QvYmFyY2xheXMtcHJlbWllci1sZWFndWUtdGFibGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoe3F1ZXJ5fSkge1xuICAgIGNvbnN0IGlkID0gcXVlcnkuaWQ7XG4gICAgaWYgKCFwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICAgIC8vIFN0aWxsIG9uIHRoZSBzZXJ2ZXIgLSBtYWtlIGEgcmVxdWVzdFxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vYXBpLmZvb3RiYWxsLWRhdGEub3JnL3YxL2NvbXBldGl0aW9ucy80MjYvbGVhZ3VlVGFibGUnKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRhdGE6IHJlcy5kYXRhLFxuICAgICAgICAvLyBGaWx0ZXIgYW5kIHJldHVybiBkYXRhIGJhc2VkIG9uIHF1ZXJ5XG4gICAgICAgIHN0YW5kaW5nOiByZXMuZGF0YS5zdGFuZGluZy5maWx0ZXIocyA9PiBzLnBvc2l0aW9uID09IGlkKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBOb3Qgb24gdGhlIHNlcnZlciAtIGp1c3QgbmF2aWdhdGluZyAtXG4gICAgICAvLyBzbyB1c2UgdGhlIGNhY2hlXG4gICAgICBjb25zdCBicGxEYXRhID0gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdicGwnKSk7XG4gICAgICAvLyBGaWx0ZXIgYW5kIHJldHVybiBkYXRhIGJhc2VkIG9uIHF1ZXJ5XG4gICAgICByZXR1cm4ge3N0YW5kaW5nOiBicGxEYXRhLnN0YW5kaW5nLmZpbHRlcihzID0+IHMucG9zaXRpb24gPT0gaWQpfVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIENhY2hlIGRhdGEgaW4gbG9jYWxTdG9yYWdlIGlmIG5vdCBhbHJlYWR5IGNhY2hlZFxuICAgIGlmICghc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnYnBsJykpIHtcbiAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2JwbCcsIEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMuZGF0YSkpO1xuICAgIH1cbiAgfVxuXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGRldGFpbFN0eWxlID0ge1xuICAgICAgdWw6IHtcbiAgICAgICAgbWFyZ2luVG9wOiAnMTAwcHgnXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5MZWFndWUgVGFibGU8L3RpdGxlPlxuICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICAgICAgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vdW5wa2cuY29tL3B1cmVjc3NAMC42LjEvYnVpbGQvcHVyZS1taW4uY3NzXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLWdcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS04LTI0XCI+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtNC0yNFwiPlxuICAgICAgICAgICAgPGgyPnt0aGlzLnByb3BzLnN0YW5kaW5nWzBdLnRlYW1OYW1lfTwvaDI+XG4gICAgICAgICAgICA8aW1nIHNyYz17dGhpcy5wcm9wcy5zdGFuZGluZ1swXS5jcmVzdFVSSX0gY2xhc3NOYW1lPVwicHVyZS1pbWdcIi8+XG4gICAgICAgICAgICA8aDM+UG9pbnRzOiB7dGhpcy5wcm9wcy5zdGFuZGluZ1swXS5wb2ludHN9PC9oMz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0xMi0yNFwiPlxuICAgICAgICAgICAgPHVsIHN0eWxlPXtkZXRhaWxTdHlsZS51bH0+XG4gICAgICAgICAgICAgIDxsaT48c3Ryb25nPkdvYWxzPC9zdHJvbmc+OiB7dGhpcy5wcm9wcy5zdGFuZGluZ1swXS5nb2Fsc308L2xpPlxuICAgICAgICAgICAgICA8bGk+PHN0cm9uZz5XaW5zPC9zdHJvbmc+OiB7dGhpcy5wcm9wcy5zdGFuZGluZ1swXS53aW5zfTwvbGk+XG4gICAgICAgICAgICAgIDxsaT48c3Ryb25nPkxvc3Nlczwvc3Ryb25nPjoge3RoaXMucHJvcHMuc3RhbmRpbmdbMF0ubG9zc2VzfTwvbGk+XG4gICAgICAgICAgICAgIDxsaT48c3Ryb25nPkRyYXdzPC9zdHJvbmc+OiB7dGhpcy5wcm9wcy5zdGFuZGluZ1swXS5kcmF3c308L2xpPlxuICAgICAgICAgICAgICA8bGk+PHN0cm9uZz5Hb2FscyBBZ2FpbnN0PC9zdHJvbmc+OiB7dGhpcy5wcm9wcy5zdGFuZGluZ1swXS5nb2Fsc0FnYWluc3R9PC9saT5cbiAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+R29hbCBEaWZmZXJlbmNlPC9zdHJvbmc+OiB7dGhpcy5wcm9wcy5zdGFuZGluZ1swXS5nb2FsRGlmZmVyZW5jZX08L2xpPlxuICAgICAgICAgICAgICA8bGk+PHN0cm9uZz5HYW1lcyBQbGF5ZWQ8L3N0cm9uZz46IHt0aGlzLnByb3BzLnN0YW5kaW5nWzBdLnBsYXllZEdhbWVzfTwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5Ib21lPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl19
	    if (true) {
	      module.hot.accept()

	      var Component = module.exports.default || module.exports
	      Component.__route = "/details"

	      if (module.hot.status() !== 'idle') {
	        var components = next.router.components
	        for (var r in components) {
	          if (!components.hasOwnProperty(r)) continue

	          if (components[r].Component.__route === "/details") {
	            next.router.update(r, Component)
	          }
	        }
	      }
	    }
	  
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(125)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9kZXRhaWxzLmpzP2Q4MTAiXSwibmFtZXMiOlsic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsInByb3BzIiwiZGF0YSIsImRldGFpbFN0eWxlIiwidWwiLCJtYXJnaW5Ub3AiLCJzdGFuZGluZyIsInRlYW1OYW1lIiwiY3Jlc3RVUkkiLCJwb2ludHMiLCJnb2FscyIsIndpbnMiLCJsb3NzZXMiLCJkcmF3cyIsImdvYWxzQWdhaW5zdCIsImdvYWxEaWZmZXJlbmNlIiwicGxheWVkR2FtZXMiLCJxdWVyeSIsImlkIiwicHJvY2VzcyIsImJyb3dzZXIiLCJnZXQiLCJyZXMiLCJmaWx0ZXIiLCJzIiwicG9zaXRpb24iLCJicGxEYXRhIiwiSlNPTiIsInBhcnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7eUNBc0JzQjtBQUNsQjtBQUNBLFdBQUksQ0FBQ0EsZUFBZUMsT0FBZixDQUF1QixLQUF2QixDQUFMLEVBQW9DO0FBQ2xDRCx3QkFBZUUsT0FBZixDQUF1QixLQUF2QixFQUE4Qix5QkFBZSxLQUFLQyxLQUFMLENBQVdDLElBQTFCLENBQTlCO0FBQ0Q7QUFDRjs7OzhCQUdRO0FBQ1AsV0FBTUMsY0FBYztBQUNsQkMsYUFBSTtBQUNGQyxzQkFBVztBQURUO0FBRGMsUUFBcEI7O0FBTUEsY0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFFRTtBQUNFLG1CQUFLLFVBRFA7QUFFRSxzQkFBUTtBQUZWLGFBRkY7QUFNRTtBQUNFLGtCQUFJLFlBRE47QUFFRSxtQkFBSztBQUZQO0FBTkYsVUFERjtBQWFFO0FBQUE7QUFBQSxhQUFLLFdBQVUsUUFBZjtBQUNFLGtEQUFLLFdBQVUsYUFBZixHQURGO0FBRUU7QUFBQTtBQUFBLGVBQUssV0FBVSxhQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUssb0JBQUtKLEtBQUwsQ0FBV0ssUUFBWCxDQUFvQixDQUFwQixFQUF1QkM7QUFBNUIsY0FERjtBQUVFLG9EQUFLLEtBQUssS0FBS04sS0FBTCxDQUFXSyxRQUFYLENBQW9CLENBQXBCLEVBQXVCRSxRQUFqQyxFQUEyQyxXQUFVLFVBQXJELEdBRkY7QUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFhLG9CQUFLUCxLQUFMLENBQVdLLFFBQVgsQ0FBb0IsQ0FBcEIsRUFBdUJHO0FBQXBDO0FBSEYsWUFGRjtBQU9FO0FBQUE7QUFBQSxlQUFLLFdBQVUsY0FBZjtBQUNFO0FBQUE7QUFBQSxpQkFBSSxPQUFPTixZQUFZQyxFQUF2QjtBQUNFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQUo7QUFBQTtBQUE2QixzQkFBS0gsS0FBTCxDQUFXSyxRQUFYLENBQW9CLENBQXBCLEVBQXVCSTtBQUFwRCxnQkFERjtBQUVFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQUo7QUFBQTtBQUE0QixzQkFBS1QsS0FBTCxDQUFXSyxRQUFYLENBQW9CLENBQXBCLEVBQXVCSztBQUFuRCxnQkFGRjtBQUdFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQUo7QUFBQTtBQUE4QixzQkFBS1YsS0FBTCxDQUFXSyxRQUFYLENBQW9CLENBQXBCLEVBQXVCTTtBQUFyRCxnQkFIRjtBQUlFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQUo7QUFBQTtBQUE2QixzQkFBS1gsS0FBTCxDQUFXSyxRQUFYLENBQW9CLENBQXBCLEVBQXVCTztBQUFwRCxnQkFKRjtBQUtFO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQUo7QUFBQTtBQUFxQyxzQkFBS1osS0FBTCxDQUFXSyxRQUFYLENBQW9CLENBQXBCLEVBQXVCUTtBQUE1RCxnQkFMRjtBQU1FO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQUo7QUFBQTtBQUF1QyxzQkFBS2IsS0FBTCxDQUFXSyxRQUFYLENBQW9CLENBQXBCLEVBQXVCUztBQUE5RCxnQkFORjtBQU9FO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQUo7QUFBQTtBQUFvQyxzQkFBS2QsS0FBTCxDQUFXSyxRQUFYLENBQW9CLENBQXBCLEVBQXVCVTtBQUEzRDtBQVBGLGNBREY7QUFVRTtBQUFBO0FBQUEsaUJBQU0sTUFBSyxHQUFYO0FBQUE7QUFBQTtBQVZGO0FBUEY7QUFiRixRQURGO0FBb0NEOzs7OzthQXRFNkJDLEssU0FBQUEsSzs7Ozs7O0FBQ3RCQyxtQixHQUFLRCxNQUFNQyxFOztxQkFDWkMsUUFBUUMsTzs7Ozs7O3dCQUVPLGdCQUFNQyxHQUFOLENBQVUsOERBQVYsQzs7O0FBQVpDLG9CO2tEQUNDO0FBQ0xwQix5QkFBTW9CLElBQUlwQixJQURMO0FBRUw7QUFDQUksNkJBQVVnQixJQUFJcEIsSUFBSixDQUFTSSxRQUFULENBQWtCaUIsTUFBbEIsQ0FBeUI7QUFBQSw0QkFBS0MsRUFBRUMsUUFBRixJQUFjUCxFQUFuQjtBQUFBLG9CQUF6QjtBQUhMLGtCOzs7QUFNUDtBQUNBO0FBQ01RLHdCLEdBQVVDLEtBQUtDLEtBQUwsQ0FBVzlCLGVBQWVDLE9BQWYsQ0FBdUIsS0FBdkIsQ0FBWCxDO0FBQ2hCOztrREFDTyxFQUFDTyxVQUFVb0IsUUFBUXBCLFFBQVIsQ0FBaUJpQixNQUFqQixDQUF3QjtBQUFBLDRCQUFLQyxFQUFFQyxRQUFGLElBQWNQLEVBQW5CO0FBQUEsb0JBQXhCLENBQVgsRSIsImZpbGUiOiI0LmE4OTgwNzM3NDg2MGMxOWZjMjlhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoe3F1ZXJ5fSkge1xuICAgIGNvbnN0IGlkID0gcXVlcnkuaWQ7XG4gICAgaWYgKCFwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICAgIC8vIFN0aWxsIG9uIHRoZSBzZXJ2ZXIgLSBtYWtlIGEgcmVxdWVzdFxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vYXBpLmZvb3RiYWxsLWRhdGEub3JnL3YxL2NvbXBldGl0aW9ucy80MjYvbGVhZ3VlVGFibGUnKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRhdGE6IHJlcy5kYXRhLFxuICAgICAgICAvLyBGaWx0ZXIgYW5kIHJldHVybiBkYXRhIGJhc2VkIG9uIHF1ZXJ5XG4gICAgICAgIHN0YW5kaW5nOiByZXMuZGF0YS5zdGFuZGluZy5maWx0ZXIocyA9PiBzLnBvc2l0aW9uID09IGlkKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBOb3Qgb24gdGhlIHNlcnZlciAtIGp1c3QgbmF2aWdhdGluZyAtXG4gICAgICAvLyBzbyB1c2UgdGhlIGNhY2hlXG4gICAgICBjb25zdCBicGxEYXRhID0gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdicGwnKSk7XG4gICAgICAvLyBGaWx0ZXIgYW5kIHJldHVybiBkYXRhIGJhc2VkIG9uIHF1ZXJ5XG4gICAgICByZXR1cm4ge3N0YW5kaW5nOiBicGxEYXRhLnN0YW5kaW5nLmZpbHRlcihzID0+IHMucG9zaXRpb24gPT0gaWQpfVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIENhY2hlIGRhdGEgaW4gbG9jYWxTdG9yYWdlIGlmIG5vdCBhbHJlYWR5IGNhY2hlZFxuICAgIGlmICghc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnYnBsJykpIHtcbiAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2JwbCcsIEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMuZGF0YSkpO1xuICAgIH1cbiAgfVxuXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGRldGFpbFN0eWxlID0ge1xuICAgICAgdWw6IHtcbiAgICAgICAgbWFyZ2luVG9wOiAnMTAwcHgnXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5MZWFndWUgVGFibGU8L3RpdGxlPlxuICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICAgICAgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vdW5wa2cuY29tL3B1cmVjc3NAMC42LjEvYnVpbGQvcHVyZS1taW4uY3NzXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLWdcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS04LTI0XCI+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdXJlLXUtNC0yNFwiPlxuICAgICAgICAgICAgPGgyPnt0aGlzLnByb3BzLnN0YW5kaW5nWzBdLnRlYW1OYW1lfTwvaDI+XG4gICAgICAgICAgICA8aW1nIHNyYz17dGhpcy5wcm9wcy5zdGFuZGluZ1swXS5jcmVzdFVSSX0gY2xhc3NOYW1lPVwicHVyZS1pbWdcIi8+XG4gICAgICAgICAgICA8aDM+UG9pbnRzOiB7dGhpcy5wcm9wcy5zdGFuZGluZ1swXS5wb2ludHN9PC9oMz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1cmUtdS0xMi0yNFwiPlxuICAgICAgICAgICAgPHVsIHN0eWxlPXtkZXRhaWxTdHlsZS51bH0+XG4gICAgICAgICAgICAgIDxsaT48c3Ryb25nPkdvYWxzPC9zdHJvbmc+OiB7dGhpcy5wcm9wcy5zdGFuZGluZ1swXS5nb2Fsc308L2xpPlxuICAgICAgICAgICAgICA8bGk+PHN0cm9uZz5XaW5zPC9zdHJvbmc+OiB7dGhpcy5wcm9wcy5zdGFuZGluZ1swXS53aW5zfTwvbGk+XG4gICAgICAgICAgICAgIDxsaT48c3Ryb25nPkxvc3Nlczwvc3Ryb25nPjoge3RoaXMucHJvcHMuc3RhbmRpbmdbMF0ubG9zc2VzfTwvbGk+XG4gICAgICAgICAgICAgIDxsaT48c3Ryb25nPkRyYXdzPC9zdHJvbmc+OiB7dGhpcy5wcm9wcy5zdGFuZGluZ1swXS5kcmF3c308L2xpPlxuICAgICAgICAgICAgICA8bGk+PHN0cm9uZz5Hb2FscyBBZ2FpbnN0PC9zdHJvbmc+OiB7dGhpcy5wcm9wcy5zdGFuZGluZ1swXS5nb2Fsc0FnYWluc3R9PC9saT5cbiAgICAgICAgICAgICAgPGxpPjxzdHJvbmc+R29hbCBEaWZmZXJlbmNlPC9zdHJvbmc+OiB7dGhpcy5wcm9wcy5zdGFuZGluZ1swXS5nb2FsRGlmZmVyZW5jZX08L2xpPlxuICAgICAgICAgICAgICA8bGk+PHN0cm9uZz5HYW1lcyBQbGF5ZWQ8L3N0cm9uZz46IHt0aGlzLnByb3BzLnN0YW5kaW5nWzBdLnBsYXllZEdhbWVzfTwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5Ib21lPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvZGV0YWlscy5qcyJdLCJzb3VyY2VSb290IjoiIn0=