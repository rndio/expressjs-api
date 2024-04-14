import Joi from "joi"

// Project Validation
const getProjectValidation = Joi.number().integer().required();
const searchProjectValidation = Joi.object({
    page: Joi.number().integer().min(1).positive().default(1),
    size: Joi.number().integer().min(1).max(100).positive().default(10),
    name: Joi.string().max(100).optional(),
    email: Joi.string().max(100).optional(),
    message: Joi.string().max(10000).optional()
});
const storeProjectValidation = Joi.object({
    name: Joi.string().max(100).optional(),
    email: Joi.string().email().max(100).optional(),
    message: Joi.string().max(10000).required()
});
const updateProjectValidation = Joi.object({
    name: Joi.string().max(100).optional(),
    email: Joi.string().email().max(100).optional(),
    message: Joi.string().max(10000).required()
});

// Project Category Validation
const getProjectCategoryValidation = Joi.number().integer().required();
const searchProjectCategoryValidation = Joi.object({
    page: Joi.number().integer().min(1).positive().default(1),
    size: Joi.number().integer().min(1).max(100).positive().default(10),
    name: Joi.string().max(100).optional(),
    email: Joi.string().max(100).optional(),
    message: Joi.string().max(10000).optional()
});
const storeProjectCategoryValidation = Joi.object({
    name: Joi.string().max(100).optional(),
    email: Joi.string().email().max(100).optional(),
    message: Joi.string().max(10000).required()
});
const updateProjectCategoryValidation = Joi.object({
    name: Joi.string().max(100).optional(),
    email: Joi.string().email().max(100).optional(),
    message: Joi.string().max(10000).required()
});


export {
    getProjectValidation,
    searchProjectValidation,
    storeProjectValidation,
    updateProjectValidation,
    getProjectCategoryValidation,
    searchProjectCategoryValidation,
    storeProjectCategoryValidation,
    updateProjectCategoryValidation
};
