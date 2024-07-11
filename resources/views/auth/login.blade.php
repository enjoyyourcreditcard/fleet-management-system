@extends('layouts.auth.app')

@section('content')
<div class="flex flex-col md:flex-row">
    <div class="min-w-96 w-full flex flex-col justify-end items-start bg-neutral-900 border-t border-l border-r md:border-r-0 md:border-b border-neutral-700 rounded-t-2xl md:rounded-tr-none md:rounded-l-2xl p-6">
        <div class="text-xl md:text-2xl text-neutral-200 font-bold">GPS TRACKING</div>
        <div class="text-xl md:text-4xl text-neutral-400 font-bold ml-11">DASHBOARD</div>
    </div>
    <div class="min-w-60 w-full bg-neutral-700 border border-neutral-500 p-6 rounded-b-2xl md:rounded-bl-none md:rounded-r-2xl">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header text-neutral-200 font-bold">{{ __('Login') }}</div>

                    <hr class="my-6 border-neutral-500">

                    <div class="card-body">
                        <form method="POST" action="{{ route('login') }}">
                            @csrf

                            <div class="row mb-6">
                                {{-- <label for="email" class="col-md-4 col-form-label text-md-end text-neutral-200">{{ __('Email Address') }}</label> --}}

                                <div class="col-md-6">
                                    <input id="email" type="email" class="bg-neutral-800 border border-neutral-500 text-neutral-200 px-4 py-2 w-full rounded-xl @error('email') border-red-400 @enderror" name="email" value="{{ old('email') }}" placeholder="Email Address.." required autocomplete="email" autofocus>

                                    @error('email')
                                        <div class="text-red-400 mt-2" role="alert">
                                            {{ $message }}
                                        </div>
                                    @enderror
                                </div>
                            </div>

                            <div class="row mb-6">
                                {{-- <label for="password" class="col-md-4 col-form-label text-md-end text-neutral-200">{{ __('Password') }}</label> --}}

                                <div class="col-md-6">
                                    <input id="password" type="password" class="bg-neutral-800 border border-neutral-500 text-neutral-200 px-4 py-2 w-full rounded-xl @error('password') border-red-500 @enderror" name="password" placeholder="Password.." required autocomplete="current-password">

                                    @error('password')
                                        <div class="text-red-400 mt-2" role="alert">
                                            {{ $message }}
                                        </div>
                                    @enderror
                                </div>
                            </div>

                            <div class="row mb-6">
                                <div class="col-md-6 offset-md-4">
                                    <div class="form-check flex justify-start items-center gap-2">
                                        <input class="invert accent-gray-200" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

                                        <label class="form-check-label text-neutral-200" for="remember">
                                            {{ __('Remember Me') }}
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="row mb-0">
                                <div class="col-md-8 offset-md-4 flex flex-col gap-6">
                                    <button type="submit" class="w-full py-1 border border-neutral-500 bg-neutral-700 text-emerald-200 rounded-xl hover:brightness-125 active:brightness-75">
                                        {{ __('Login') }}
                                    </button>

                                    @if (Route::has('password.request'))
                                        <a class="btn btn-link text-neutral-400 font-light text-center hover:underline" href="{{ route('password.request') }}">
                                            {{ __('Forgot Your Password?') }}
                                        </a>
                                    @endif
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
