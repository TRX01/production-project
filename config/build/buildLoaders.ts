import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BuildOptions } from './types/config'
import { buildCssLoaders } from './laoders/buildCssLoaders'
import { buildSvgLoaders } from './laoders/buildSvgLoaders'

export function buildLoaders (options: BuildOptions): webpack.RuleSetRule[] {
    const svgLoader = buildSvgLoaders()
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    }
    const cssLoader = buildCssLoaders(options.isDev)

    return [
        svgLoader,
        typescriptLoader,
        cssLoader
    ]
}
