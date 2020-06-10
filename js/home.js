export default function define(e, n) {
	const a = e.module();
	return (
		a.variable(n()).define([ 'md' ], function(e) {
			return e`# Gradient Generator`;
		}),
		a
			.variable(n('gradient'))
			.define(
				'gradient',
				[
					'randomColors',
					'n',
					'settings',
					'foci',
					'w',
					'scales',
					'skews',
					'rotates',
					'translations',
					'shuffle',
					'html',
					'saturation'
				],
				function(e, n, a, t, r, i, o, s, l, f, d, u) {
					const c = `#bg {fill:${e[0]}}`,
						m = [];
					for (var g = 0; g < n; g++) m.push(`.rect${g} {fill:url(#rg${g})}`);
					const v = `<style>\n    ${c}\n    ${m.reduce((e, n) => e + n)}\n  </style>`,
						$ = [];
					for (g = 0; g < n; g++)
						for (var b = 0; b < a.numGradientsPerSet; b++)
							$.push(
								`<radialGradient\n          id="rg${g}"\n          fx="${t[g][
									b
								][0]}"\n          fy="${t[g][b][1]}">\n          <stop offset="0%" stop-color="${e[
									g
								]}"/>\n          <stop offset="100%" stop-color="${e[
									g
								]}" stop-opacity="0"/>\n        </radialGradient>`
							);
					const F = `${v}\n  ${$.reduce((e, n) => e + n)}`,
						h = [];
					for (g = 0; g < n; g++)
						for (b = 0; b < a.numGradientsPerSet; b++)
							h.push(
								`<rect class="rect rect${g}" x="0" y="0" width="100%" height="100%"\n          transform="translate(${r /
									2} ${r / 2}) scale(${i[g][b][0]} ${i[g][b][1]}) skewX(${o[g][b]}) rotate(${s[g][
									b
								]}) translate(${l[g][b][0]} ${l[g][b][1]}) translate(${-r / 2} ${-r / 2})"/>`
							);
					return (
						f(h),
						d`<svg viewBox="0 0 ${r} ${r}" preserveAspectRatio="xMidYMid slice" class="flex-shrink-0" style="min-width:100%;min-height:100%;filter:saturate(${u}%);-webkit-filter:saturate(${u}%)">
  <defs>${F}</defs>
  ${'<rect id="bg" x="0" y="0" width="100%" height="100%"/>' + h.reduce((e, n) => e + n)}
</svg>`
					);
				}
			),
		a.variable(n('initialColors')).define('initialColors', function() {
			return [
				[ '#E452F2' ],
				[ '#CC1440', '#E05C5F' ],
				[ '#F5AA2F', '#F2EC29' ],
				[ '#60D408', '#109E57' ],
				[ '#2071E8', '#513EED', '#12C5DE' ],
				[ '#1548A1' ]
			];
		}),
		a.variable(n('allowedFirstColors')).define('allowedFirstColors', function() {
			return [ '#E452F2', '#E05C5F', '#513EED' ];
		}),
		a.variable(n('n')).define('n', function() {
			return 6;
		}),
		a
			.variable(n('randomColors'))
			.define('randomColors', [ 'shuffle', 'initialColors', 'n', 'allowedFirstColors' ], function(e, n, a, t) {
				for (var r = e(n).slice(0, a).map((n) => e(n)[0]); ; ) {
					if (t.includes(r[0])) return r;
					e(r);
				}
			}),
		a.variable(n('settings')).define('settings', function() {
			return {
				numGradientsPerSet: 1,
				scaleMin: 0.75,
				scaleMax: 1.5,
				fociMin: 0.1,
				fociMax: 0.3,
				translateMin: 0.1,
				translateMax: 0.4,
				skewMax: 10
			};
		}),
		a.variable(n('w')).define('w', function() {
			return 300;
		}),
		a.variable(n('saturation')).define('saturation', function() {
			return 150;
		}),
		a.variable(n('foci')).define('foci', [ 'makeSet', 'generateRandomFoci' ], function(e, n) {
			return e(n);
		}),
		a.variable(n('scales')).define('scales', [ 'makeSet', 'generateRandomScale' ], function(e, n) {
			return e(n);
		}),
		a
			.variable(n('translations'))
			.define('translations', [ 'makeSet', 'generateRandomTranslation' ], function(e, n) {
				return e(n);
			}),
		a.variable(n('skews')).define('skews', [ 'makeSet', 'generateRandomSkew' ], function(e, n) {
			return e(n);
		}),
		a.variable(n('rotates')).define('rotates', [ 'makeSet', 'generateRandomRotate' ], function(e, n) {
			return e(n);
		}),
		a.variable(n('makeSet')).define('makeSet', [ 'n', 'settings' ], function(e, n) {
			return (a) => {
				for (var t = [], r = 0; r < e; r++) {
					for (var i = [], o = 0; o < n.numGradientsPerSet; o++) i.push(a());
					t.push(i);
				}
				return t;
			};
		}),
		a.variable(n('generateRandomFoci')).define('generateRandomFoci', [ 'random', 'settings' ], function(e, n) {
			return () => [ e(n.fociMin, n.fociMax), 0.5 ];
		}),
		a.variable(n('generateRandomScale')).define('generateRandomScale', [ 'random', 'settings' ], function(e, n) {
			return () => {
				return [ e(n.scaleMin, n.scaleMax), e(n.scaleMin, n.scaleMax) ];
			};
		}),
		a
			.variable(n('generateRandomTranslation'))
			.define('generateRandomTranslation', [ 'random', 'settings', 'w', 'randomSign' ], function(e, n, a, t) {
				return () => {
					return [ e(n.translateMin, n.translateMax) * a * t(), e(n.translateMin, n.translateMax) * a * t() ];
				};
			}),
		a.variable(n('generateRandomSkew')).define('generateRandomSkew', [ 'random', 'settings' ], function(e, n) {
			return () => e(-n.skewMax, n.skewMax);
		}),
		a.variable(n('generateRandomRotate')).define('generateRandomRotate', [ 'random' ], function(e) {
			return () => e(0, 360);
		}),
		a.variable(n('shuffle')).define('shuffle', function() {
			return (e) => {
				for (let n = e.length - 1; n > 0; n--) {
					const a = Math.floor(Math.random() * (n + 1));
					[ e[n], e[a] ] = [ e[a], e[n] ];
				}
				return e;
			};
		}),
		a.variable(n('random')).define('random', function() {
			return (e, n) => Math.random() * (n - e) + e;
		}),
		a.variable(n('randomSign')).define('randomSign', function() {
			return () => (Math.random() < 0.5 ? -1 : 1);
		}),
		a
	);
}
