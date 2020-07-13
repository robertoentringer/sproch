//const expressions = () import(/* webpackChunkName: "expressions" */ "@/data/expressions")

import expressions from '@/data/expressions_id'

export const getExpressionById = (id) => expressions.find((item) => (item.id = id))

export const getExpressionBySlug = (slug) => expressions.find((item) => item.slug == slug)

export const getExpressionsFirsts = (size) => expressions.slice(0, size)

export default expressions
