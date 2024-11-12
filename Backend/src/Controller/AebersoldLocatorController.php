<?php

namespace App\Controller;

use App\Entity\Morceaux;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api', name: 'api_')]
class AebersoldLocatorController extends AbstractController
{
    #[Route('/tracks', name: 'app_aebersold_locator', methods: ['GET'])]
    public function index(EntityManagerInterface $em): JsonResponse
    {
        $products = $em->getRepository(Morceaux::class)->findAll();
        $data = [];

        foreach ($products as $product) {
            $data[] = [
                'id' => $product->getId(),
                'title' => $product->getTitle(),
                'key' => $product->getKeyChord()->getKeyChord(),
                'style' => $product->getStyle()->getType()
            ];
        }

        return $this->json($data);
    }

    #[Route('/tracks/{id}', name: 'app_aebersold_locator_show', methods: ['GET'])]
    public function show(Morceaux $product): JsonResponse
    {
        return $this->json([
            'id' => $product->getId(),
            'title' => $product->getTitle(),
            'key' => $product->getKeyChord()->getKeyChord(),
            'style' => $product->getStyle()->getType()
        ]);
    }
}
