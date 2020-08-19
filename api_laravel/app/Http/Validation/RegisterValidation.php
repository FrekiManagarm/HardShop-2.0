<?php 

namespace App\Http\Validation;

class RegisterValidation {
    public function rules() {
        return [
            'name' => ['required', 'string', 'max:150', 'min:3'],
            'email' => ['required', 'string', 'email', 'max:150', 'min:15', 'unique:users'],
            'password' => ['required', 'string', 'min:8'],
            'confirm_password' => ['required', 'same:password']
        ];
    }

    public function messages() {
        return [
            'name.required' => 'Vous devez spécifier votre nom',
            'name.max' => 'Votre nom doit faire au maximum 150 caractères',
            'name.min' => 'Votre nom doit faire au minimum 3 caractères',
            'email.required' => 'Vous devez renseigner votre email',
            'email.unique' => 'Cet email est déjà utilisé',
            'email.max' => 'Votre email doit faire au maximum 150 caractères',
            'email.min' => 'Votre email doit faire au minimum 15 caractères',
            'password.required' => 'Vous devez renseigner un mot de passe', 
            'password.min' => 'Votre mot de passe doit faire au minimum 8 caractères',
            'confirm_password.same' => 'Votre mot de passe et votre mot de passe de confirmation doivent être identiques',
            'confirm_password.required' => 'Vous devez confirmer votre mot de passe'
        ];
    }
}